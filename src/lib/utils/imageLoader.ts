/**
 * Custom image loader for Next.js Image optimization
 * Handles AVIF/WebP format selection and responsive sizing
 */

export interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

/**
 * Default image loader with AVIF/WebP support
 * Next.js will automatically handle format negotiation
 */
export function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // If using external CDN, customize this function
  // For local images, Next.js handles optimization automatically

  const params = new URLSearchParams()

  if (quality) {
    params.set('q', quality.toString())
  }

  params.set('w', width.toString())

  const queryString = params.toString()
  return queryString ? `${src}?${queryString}` : src
}

/**
 * Get optimal image quality based on device type
 */
export function getOptimalQuality(isMobile: boolean): number {
  return isMobile ? 65 : 85
}

/**
 * Get image sizes string for responsive images
 */
export function getResponsiveSizes(breakpoint: 'mobile' | 'tablet' | 'desktop'): string {
  switch (breakpoint) {
    case 'mobile':
      return '100vw'
    case 'tablet':
      return '80vw'
    case 'desktop':
      return '1200px'
    default:
      return '100vw'
  }
}
