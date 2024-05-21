import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vietwander',
  description: 'Travelling app for anyone who loves to explore Vietnam.',

  // This is the favicon of the website
  // The /favicon.ico is the public path of the favicon
  // So the favicon is located at "public/favicon.ico"
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
