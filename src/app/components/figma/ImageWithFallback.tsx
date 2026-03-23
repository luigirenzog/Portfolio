import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// Include image assets in the Vite build and map source-like paths to hashed URLs.
const ASSET_URLS = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,gif,svg,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function resolveImageSrc(src: React.ImgHTMLAttributes<HTMLImageElement>['src']) {
  if (typeof src !== 'string') return src
  const normalizedSrc = src.startsWith('/src/assets/') ? src.slice(1) : src
  if (!normalizedSrc.startsWith('src/assets/')) return src

  const viteKey = `/${normalizedSrc}`
  return ASSET_URLS[viteKey] ?? src
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props
  const resolvedSrc = resolveImageSrc(src)

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={resolvedSrc} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
