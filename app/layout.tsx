import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vietwander',
  description: 'Travelling app',

  // This is the favicon of the website
  // The /favicon.ico is the public path of the favicon
  // So the favicon is located at "public/favicon.ico"
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />

        <main className='relative overflow-hidden'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
