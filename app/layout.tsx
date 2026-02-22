import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'BonusGSM - Wholesale Smartphone LCD Parts & Accessories',
  description: 'BonusGSM is the wholesale smartphone accessories, LCD screens, batteries and parts supplier. High quality products at the lowest prices. Free shipping, 24h delivery.',
  keywords: 'wholesale smartphone parts, LCD screens, batteries, phone accessories, iPhone LCD, Samsung LCD, repair tools',
}

export const viewport: Viewport = {
  themeColor: '#1a56db',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
