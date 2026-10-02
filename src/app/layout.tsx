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
    default: "Game Hub - Play Web-Based Games Online",
    template: "%s | Game Hub",
  },
  description:
    "Play different web-based games in one place. Choose your favorite game and start playing.",
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
    siteName: "Game Hub",
    title: "Game Hub - Play Web-Based Games Online",
    description:
      "Play different web-based games in one place. Choose your favorite game and start playing.",
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
