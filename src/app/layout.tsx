import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://game-hub-portal-alpha.vercel.app"),
  title: {
    default: "ZZoryx GameHub - Play Online Games",
    template: "%s | ZZoryx GameHub",
  },
  description:
    "Welcome to ZZoryx GameHub! Discover and play exciting online games, explore game categories, and find your next favorite game.",
  applicationName: "ZZoryx GameHub",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "7mQ3U-ZuMLZGRjdeZ29lddjQ2wLY7sfMUEN7YUadM-o",
  },
  openGraph: {
    type: "website",
    url: "https://game-hub-portal-alpha.vercel.app",
    siteName: "ZZoryx GameHub",
    title: "ZZoryx GameHub - Play Online Games",
    description:
      "Welcome to ZZoryx GameHub! Discover and play exciting online games, explore game categories, and find your next favorite game.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
