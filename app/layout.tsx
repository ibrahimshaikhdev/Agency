import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevMora - AI Automation & Web Solutions Agency",
  description:
    "Professional AI automation, chatbot integration, web development, and SEO optimization services. Where automation meets intelligent web design.",
  keywords:
    "AI automation, chatbot development, web development, SEO optimization, artificial intelligence, business automation",
  authors: [{ name: "DevMora" }],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "DevMora - AI Automation & Web Solutions Agency",
    description: "Professional AI automation, chatbot integration, web development, and SEO optimization services.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DevMora Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMora - AI Automation & Web Solutions Agency",
    description: "Professional AI automation, chatbot integration, web development, and SEO optimization services.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
