import Hero from "@/components/hero"
import FeaturedGames from "@/components/featured-games"

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Game Hub",
    url: "https://game-hub-portal-alpha.vercel.app",
    description:
      "Play different web-based games in one place. Choose your favorite game and start playing.",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <FeaturedGames />
    </>
  )
}
