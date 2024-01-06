import type { Metadata } from 'next'
import { Montserrat, Raleway } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Belati Jagad Bintang Syuhada',
  description: 'My portofolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`select-none ${montserrat.variable} ${raleway.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
