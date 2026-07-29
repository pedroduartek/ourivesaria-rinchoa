import { existsSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { getResponsiveImage, imageManifestPaths } from '../content/imageManifest'

/**
 * The manifest declares the responsive ladder for every image, and
 * getResponsiveImage turns it into a srcSet. If a declared width has no file on
 * disk, the browser can still pick that candidate and the image renders broken.
 * That happened silently on /casamentos (desktop picked a 960w candidate that
 * was never generated, mobile picked 640w and looked fine), so these tests walk
 * every candidate of every entry instead of trusting the manifest.
 */
const publicDir = path.resolve(__dirname, '../../public')

function candidatesOf(src: string): { url: string; width: number }[] {
  const { srcSet } = getResponsiveImage(src)
  if (!srcSet) return []

  return srcSet.split(',').map((candidate) => {
    const [url, descriptor] = candidate.trim().split(/\s+/)
    return { url, width: Number.parseInt(descriptor, 10) }
  })
}

describe('image manifest', () => {
  it('declares at least one entry', () => {
    expect(imageManifestPaths.length).toBeGreaterThan(0)
  })

  it.each(imageManifestPaths)('every srcSet candidate of %s exists on disk', (src) => {
    const candidates = candidatesOf(src)
    expect(candidates.length).toBeGreaterThan(0)

    const missing = candidates
      .filter(({ url }) => !existsSync(path.join(publicDir, url)))
      .map(({ url }) => url)

    expect(missing, `missing files for ${src}: ${missing.join(', ')}`).toEqual([])
  })

  it.each(imageManifestPaths)('the base file of %s exists on disk', (src) => {
    expect(existsSync(path.join(publicDir, src))).toBe(true)
  })

  it.each(imageManifestPaths)('%s declares ascending, unique widths', (src) => {
    const widths = candidatesOf(src).map(({ width }) => width)

    expect(widths).toEqual([...widths].sort((a, b) => a - b))
    expect(new Set(widths).size).toBe(widths.length)
  })

  it.each(imageManifestPaths)('%s exposes intrinsic dimensions for layout stability', (src) => {
    const { width, height } = getResponsiveImage(src)

    expect(width).toBeGreaterThan(0)
    expect(height).toBeGreaterThan(0)
  })

  it('maps the largest declared width to the unsuffixed base file', () => {
    for (const src of imageManifestPaths) {
      const candidates = candidatesOf(src)
      const largest = candidates[candidates.length - 1]

      expect(largest.url, `${src} should serve its base file at the largest width`).toBe(src)
    }
  })

  it('returns a passthrough result for an unknown image', () => {
    const unknown = getResponsiveImage('/images/does-not-exist.webp')

    expect(unknown.src).toBe('/images/does-not-exist.webp')
    expect(unknown.srcSet).toBeUndefined()
  })
})
