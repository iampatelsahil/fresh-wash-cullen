import { cn } from '@/lib/utils'

// Vector version of the FreshWash washer-door logo from the storefront sign (same artwork as /favicon.svg).
export function BrandMark({ id, className }: { id: string; className?: string }) {
  const clipId = `brand-mark-${id}`
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={cn('shrink-0', className)}>
      <defs>
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="35.75" />
        </clipPath>
      </defs>
      <rect width="100" height="100" rx="12" fill="#0262f5" />
      <circle cx="50" cy="50" r="40" fill="#fff" />
      <rect x="88" y="39" width="6.5" height="8.5" rx="1" fill="#fff" />
      <circle cx="79" cy="6.5" r="3" fill="#fff" />
      <circle cx="87.5" cy="6.5" r="3" fill="#fff" />
      <path
        clipPath={`url(#${clipId})`}
        fill="#0262f5"
        d="M10 52C18 50.5 23 49.5 27.5 50C35.5 51 39.5 67 46 67C52.5 67 57 52 66 50.5C72.5 49.5 80 50 90 53V95H10Z"
      />
    </svg>
  )
}
