import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import QueryClientProvider from '@/providers/QueryClientProvider'
import ThemesProvider from '@/providers/ThemesProvider'
import '@/styles/globals.scss'
import '@/styles/theme-config.css'

export const metadata = {
  title: {
    default: 'AWS Catalog',
    template: `%s - AWS Catalog`
  },
  description: 'AWS Catalog',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider>
          <ThemesProvider>
            <Header />
            {children}
          </ThemesProvider>
        </QueryClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
