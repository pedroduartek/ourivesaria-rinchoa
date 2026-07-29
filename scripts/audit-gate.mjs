/**
 * Dependency audit gate for CI.
 *
 * Fails the build on any high or critical advisory, with one exception: an
 * advisory may be allowlisted when the vulnerable code path provably does not
 * exist in this project AND there is no patched release to upgrade to.
 *
 * The allowlist is deliberately hostile to rot:
 *  - entries match a single advisory id, never a package or a severity;
 *  - an entry past its reviewBy date fails the build;
 *  - an entry whose advisory no longer appears also fails the build, so stale
 *    suppressions get deleted instead of quietly covering future problems.
 *
 * Usage: node scripts/audit-gate.mjs [path-to-audit.json]
 *        (defaults to running `npm audit --json` itself)
 */
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const allowlist = [
  {
    id: 'GHSA-qwww-vcr4-c8h2',
    package: 'react-router',
    reason:
      'RSC Mode CSRF Bypass. This site is a client-only SPA: it uses BrowserRouter with Routes/Route/Link and no React Server Components, no server actions and no router loaders/actions, so the vulnerable path is unreachable. Affected range 7.12.0-8.2.0 has no patched release; npm only offers a downgrade to 7.11.0, which would drop unrelated fixes.',
    reviewBy: '2026-10-31',
  },
  {
    id: 'GHSA-mh99-v99m-4gvg',
    package: 'brace-expansion',
    reason:
      'Out-of-memory DoS on maliciously crafted glob patterns. It arrives only through eslint-plugin-jsx-a11y -> minimatch, so it runs in lint tooling over this repo own globs, never in the shipped site and never on attacker input. Every line up to 5.0.7 is affected and 5.0.8 changed the export shape, which breaks the minimatch v3 that @eslint/config-array depends on (verified: ESLint dies with "expand is not a function"). npm only offers a downgrade of eslint-plugin-jsx-a11y.',
    reviewBy: '2026-10-31',
  },
]

function loadReport(argPath) {
  if (argPath) {
    return JSON.parse(readFileSync(argPath, 'utf8'))
  }

  try {
    // npm audit exits non-zero when it finds anything, so capture and parse regardless.
    return JSON.parse(execFileSync('npm', ['audit', '--json'], { encoding: 'utf8' }))
  } catch (error) {
    if (error.stdout) return JSON.parse(error.stdout)
    throw error
  }
}

function collectAdvisories(report) {
  const found = new Map()

  for (const [name, entry] of Object.entries(report.vulnerabilities ?? {})) {
    if (entry.severity !== 'high' && entry.severity !== 'critical') continue

    for (const via of entry.via ?? []) {
      if (typeof via !== 'object' || !via.url) continue

      const id = via.url.split('/').pop()
      if (!found.has(id)) {
        found.set(id, { id, severity: via.severity ?? entry.severity, title: via.title, packages: new Set() })
      }
      found.get(id).packages.add(name)
    }
  }

  return found
}

const report = loadReport(process.argv[2])
const found = collectAdvisories(report)
const today = new Date().toISOString().slice(0, 10)

const blocking = []
const suppressed = []

for (const advisory of found.values()) {
  const exception = allowlist.find((item) => item.id === advisory.id)

  if (!exception) {
    blocking.push(advisory)
    continue
  }

  if (exception.reviewBy < today) {
    blocking.push({ ...advisory, note: `allowlist entry expired on ${exception.reviewBy}, re-check whether a fix exists` })
    continue
  }

  suppressed.push({ advisory, exception })
}

const stale = allowlist.filter((item) => !found.has(item.id))

console.log(`Audit gate: ${found.size} high/critical advisories, ${suppressed.length} allowlisted, ${blocking.length} blocking`)

for (const { advisory, exception } of suppressed) {
  console.log(`  allowlisted ${advisory.id} (${[...advisory.packages].join(', ')}) until ${exception.reviewBy}`)
}

for (const advisory of blocking) {
  console.error(`  BLOCKING ${advisory.id} [${advisory.severity}] ${[...advisory.packages].join(', ')}: ${advisory.title ?? 'see advisory'}`)
  if (advisory.note) console.error(`    ${advisory.note}`)
}

for (const item of stale) {
  console.error(`  STALE allowlist entry ${item.id} (${item.package}) no longer reported, remove it from scripts/audit-gate.mjs`)
}

if (blocking.length > 0 || stale.length > 0) {
  process.exit(1)
}

console.log('Audit gate passed.')
