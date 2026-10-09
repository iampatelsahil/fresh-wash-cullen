export function SkipLink({ label = 'Skip to content' }: { label?: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-[calc(0.5rem+env(safe-area-inset-top))] focus:left-2 focus:z-[60] focus:rounded-full focus:bg-background focus:px-4 focus:py-3 focus:font-bold focus:text-primary focus:shadow-lg"
    >
      {label}
    </a>
  )
}
