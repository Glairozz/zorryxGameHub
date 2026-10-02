import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Game Hub, a curated collection of free web-based games you can play directly in your browser with no downloads required.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
