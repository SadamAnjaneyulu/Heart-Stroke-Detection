import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HeartVault',
  description: 'A smart health management system for stroke and risk detection',
  generator: 'HeartVault',
  icons: {
    // Primary site icons. Replace or add files under /public to change these.
    // The requested image filename (from your Downloads folder) is:
    // Generated_Image_November_09__2025_-_3_54AM-removebg-preview.png
    // Copy that file into the project's `public/` folder with the same name.
    icon: [
      {
        url: '/Generated_Image_November_09__2025_-_3_54AM-removebg-preview.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Generated_Image_November_09__2025_-_3_54AM-removebg-preview.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Generated_Image_November_09__2025_-_3_54AM-removebg-preview.png',
        type: 'image/png',
      },
    ],
    apple: '/Generated_Image_November_09__2025_-_3_54AM-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
