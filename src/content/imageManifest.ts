interface ImageAsset {
  width: number
  height: number
  widths: number[]
}

const imageManifest: Record<string, ImageAsset> = {
  '/images/rinchoa_logo.webp': {
    width: 819,
    height: 438,
    widths: [240, 480, 819],
  },
  '/images/store_front.webp': {
    width: 1536,
    height: 1024,
    widths: [640, 1024, 1536],
  },
  '/images/watch_being_repared.webp': {
    width: 720,
    height: 960,
    widths: [360, 720],
  },
  '/images/aliancas.webp': {
    width: 1600,
    height: 2400,
    widths: [640, 1024, 1600],
  },
  '/images/gravacao_aliancas.webp': {
    width: 1600,
    height: 1067,
    widths: [640, 1024, 1600],
  },
  '/images/big_watch_to_repare.webp': {
    width: 1400,
    height: 1050,
    widths: [700, 1400],
  },
  '/images/repaired_watch.webp': {
    width: 720,
    height: 960,
    widths: [360, 720],
  },
  '/images/repaired_watch_2.webp': {
    width: 960,
    height: 720,
    widths: [480, 960],
  },
  '/images/repaired_watch_3.webp': {
    width: 720,
    height: 960,
    widths: [360, 720],
  },
  '/images/watch_mechanism.webp': {
    width: 720,
    height: 960,
    widths: [360, 720],
  },
  '/images/watch_mechanism_2.webp': {
    width: 960,
    height: 720,
    widths: [480, 960],
  },
  '/images/watch_mechanism_3.webp': {
    width: 720,
    height: 960,
    widths: [360, 720],
  },
  '/images/medium_watch_repaired.webp': {
    width: 1200,
    height: 1952,
    widths: [600, 1200],
  },
  '/images/watch_to_sell.webp': {
    width: 720,
    height: 960,
    widths: [360, 720],
  },
} as const

function getVariantPath(src: string, width: number, asset: ImageAsset) {
  const largestWidth = asset.widths[asset.widths.length - 1]
  if (width === largestWidth) {
    return src
  }

  const dotIndex = src.lastIndexOf('.')
  return `${src.slice(0, dotIndex)}-${width}${src.slice(dotIndex)}`
}

export function getResponsiveImage(src: string) {
  const asset = imageManifest[src]

  if (!asset) {
    return {
      src,
      width: undefined,
      height: undefined,
      srcSet: undefined,
    }
  }

  return {
    src,
    width: asset.width,
    height: asset.height,
    srcSet: asset.widths
      .map((width) => `${getVariantPath(src, width, asset)} ${width}w`)
      .join(', '),
  }
}
