import { RootShell } from '@/components/root-shell'
import { baseMetadata, viewport } from '@/lib/metadata'
import '../globals.css'

export const metadata = baseMetadata
export { viewport }

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es">{children}</RootShell>
}
