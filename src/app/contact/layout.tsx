import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Game Hub team with questions, suggestions, or feedback about our web-based games collection.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
