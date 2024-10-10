import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const title = 'Yield Optimization Terminal (YOT)';
const description = 'A next-generation DeFi solution on the SUI blockchain, empowering users with automated and optimized strategies for higher returns in the decentralized finance ecosystem.';

export const metadata: Metadata = {
  title: {
    template: `%s - ${title}`,
    default: title,
  },
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    images: ['https://terminal.mobi/preview.png']
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
