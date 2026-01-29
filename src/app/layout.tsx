import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Execute Cine Rental | Premium Cinema Equipment",
  description: "Premier film production and cinema equipment rental in Sri Lanka. Cameras, lighting, and grip for professional filmmaking.",
  icons: {
    icon: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <CartProvider>
          <Header />
          <main className="flex-1 w-full relative z-10">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
