import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const images = [
  {
    input: 'assets/source-images/store_front.png',
    output: 'public/images/store_front.webp',
    widths: [640, 1024, 1600],
    quality: 76,
  },
  {
    input: 'assets/source-images/rinchoa_logo.png',
    output: 'public/images/rinchoa_logo.webp',
    widths: [240, 480, 900],
    quality: 72,
  },
  {
    input: 'assets/source-images/aliancas.jpg',
    output: 'public/images/aliancas.webp',
    widths: [640, 1024, 1600],
    quality: 78,
  },
  {
    input: 'assets/source-images/gravacao_aliancas.jpg',
    output: 'public/images/gravacao_aliancas.webp',
    widths: [640, 1024, 1600],
    quality: 78,
  },
  {
    input: 'assets/source-images/gravacao_aliancas_2.jpg',
    output: 'public/images/gravacao_aliancas_2.webp',
    widths: [800, 1600],
    quality: 80,
  },
  {
    input: 'assets/source-images/big_watch_to_repare.jpg',
    output: 'public/images/big_watch_to_repare.webp',
    widths: [700, 1400],
    quality: 80,
  },
  {
    input: 'assets/source-images/medium_watch_repaired.jpg',
    output: 'public/images/medium_watch_repaired.webp',
    widths: [600, 1200],
    quality: 80,
  },
  {
    input: 'assets/source-images/repair_bench.jpg',
    output: 'public/images/repair_bench.webp',
    widths: [720, 1200],
    quality: 80,
  },
  {
    input: 'assets/source-images/repaired_watch.jpg',
    output: 'public/images/repaired_watch.webp',
    widths: [360, 720],
    quality: 80,
  },
  {
    input: 'assets/source-images/repaired_watch_2.jpg',
    output: 'public/images/repaired_watch_2.webp',
    widths: [480, 960],
    quality: 80,
  },
  {
    input: 'assets/source-images/repaired_watch_3.jpg',
    output: 'public/images/repaired_watch_3.webp',
    widths: [360, 720],
    quality: 80,
  },
  {
    input: 'assets/source-images/watch_being_repared.jpg',
    output: 'public/images/watch_being_repared.webp',
    widths: [360, 720],
    quality: 80,
  },
  {
    input: 'assets/source-images/watch_to_sell.jpg',
    output: 'public/images/watch_to_sell.webp',
    widths: [360, 720],
    quality: 80,
  },
]

function getVariantOutputPath(outputPath, width, widths) {
  const largestWidth = widths[widths.length - 1]
  if (width === largestWidth) {
    return outputPath
  }

  return outputPath.replace(/\.webp$/, `-${width}.webp`)
}

async function optimizeImage(inputRelativePath, outputRelativePath, widths, quality) {
  const inputPath = path.join(rootDir, inputRelativePath)
  const outputPath = path.join(rootDir, outputRelativePath)

  await Promise.all(
    widths.map(async (width) => {
      const variantOutputPath = getVariantOutputPath(outputPath, width, widths)

      await sharp(inputPath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(variantOutputPath)
    }),
  )

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

await Promise.all(
  images.map((image) =>
    optimizeImage(image.input, image.output, image.widths, image.quality),
  ),
)
await createSocialShareImage()
