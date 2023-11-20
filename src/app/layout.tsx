import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Uncle Iroh Quotes",
  description: 'Random quotes by Uncle Iroh from Avatar: the Last Airbender',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light">
        {children}
        <Analytics />
        </ThemeProvider>
        </body>
    </html>
  )
}
