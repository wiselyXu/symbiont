import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Symbiont',
  description: 'Next 15 + React 19 + TypeScript App Router + RSC with mock APIs, i18n, web3 wallet.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} antialiased bg-gradient-linear`}>
        <div className="relative flex min-h-screen flex-col">
          {/* 固定在左上角的图标 */}
          <div className="fixed top-0 left-0 z-50 p-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/symbiont.svg"
                alt="Symbiont Logo"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-white font-semibold text-sm md:text-base">Symbiont</span>
            </div>
          </div>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}