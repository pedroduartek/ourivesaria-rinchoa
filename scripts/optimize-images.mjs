import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const images = [
  ['assets/source-images/store_front.png', 'public/images/store_front.webp', 1600],
  ['assets/source-images/rinchoa_logo.png', 'public/images/rinchoa_logo.webp', 900],
  ['assets/source-images/aliancas.jpg', 'public/images/aliancas.webp', 1600],
  [
    'assets/source-images/gravacao_aliancas.jpg',
    'public/images/gravacao_aliancas.webp',
    1600,
  ],
  [
    'assets/source-images/gravacao_aliancas_2.jpg',
    'public/images/gravacao_aliancas_2.webp',
    1600,
  ],
  [
    'assets/source-images/big_watch_to_repare.jpg',
    'public/images/big_watch_to_repare.webp',
    1400,
  ],
  [
    'assets/source-images/medium_watch_repaired.jpg',
    'public/images/medium_watch_repaired.webp',
    1200,
  ],
  ['assets/source-images/repair_bench.jpg', 'public/images/repair_bench.webp', 1200],
  [
    'assets/source-images/repaired_watch.jpg',
    'public/images/repaired_watch.webp',
    1200,
  ],
  [
    'assets/source-images/repaired_watch_2.jpg',
    'public/images/repaired_watch_2.webp',
    1200,
  ],
  [
    'assets/source-images/repaired_watch_3.jpg',
    'public/images/repaired_watch_3.webp',
    1200,
  ],
  [
    'assets/source-images/watch_being_repared.jpg',
    'public/images/watch_being_repared.webp',
    1200,
  ],
  ['assets/source-images/watch_to_sell.jpg', 'public/images/watch_to_sell.webp', 1200],
]

async function optimizeImage(inputRelativePath, outputRelativePath, width) {
  const inputPath = path.join(rootDir, inputRelativePath)
  const outputPath = path.join(rootDir, outputRelativePath)

  await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath)

  console.log(`Optimized ${outputRelativePath}`)
}

async function createSocialShareImage() {
  const inputPath = path.join(rootDir, 'assets/source-images/store_front.png')
  const outputPath = path.join(rootDir, 'public/images/social-share.webp')

  const overlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(18, 29, 23, 0.14)" />
          <stop offset="100%" stop-color="rgba(18, 29, 23, 0.82)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#panel)" />
      <rect x="56" y="54" width="490" height="522" rx="30" fill="rgba(255,250,243,0.92)" />
      <text x="96" y="145" fill="#715c40" font-family="Georgia, serif" font-size="34" letter-spacing="7">
        OURIVESARIA
      </text>
      <text x="96" y="235" fill="#27332d" font-family="Georgia, serif" font-size="74" font-weight="700">
        Rinchoa
      </text>
      <text x="96" y="308" fill="#385541" font-family="Arial, sans-serif" font-size="28">
        Joalharia, alianças e relojoaria
      </text>
      <text x="96" y="360" fill="#4b5563" font-family="Arial, sans-serif" font-size="24">
        Atendimento presencial em Sintra
      </text>
      <text x="96" y="420" fill="#4b5563" font-family="Arial, sans-serif" font-size="24">
        Reparação e manutenção de relógios
      </text>
      <text x="96" y="472" fill="#4b5563" font-family="Arial, sans-serif" font-size="24">
        Casamentos e marcação dedicada
      </text>
    </svg>
  `)

  await sharp(inputPath)
    .rotate()
    .resize({ width: 1200, height: 630, fit: 'cover' })
    .composite([{ input: overlay }])
    .webp({ quality: 84 })
    .toFile(outputPath)

  console.log('Optimized public/images/social-share.webp')
}

await Promise.all(images.map((image) => optimizeImage(...image)))
await createSocialShareImage()
