import type { Metadata } from 'next'

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vietwander',
  description: 'Travelling app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Chỗ này là để NavBar */}
        <Navbar />

        <main className='relative overflow-hidden'>
          {children}
        </main>

        {/* Chỗ này là để Footer */}
        <Footer />
      </body>
    </html>
  )
}
