"use client"

import { motion } from "framer-motion"
import { Gamepad2, Globe, Sparkles } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Curated Games",
    description:
      "We carefully select and organize the best web-based games so you can find something fun to play instantly.",
  },
  {
    icon: Globe,
    title: "Web-Based",
    description:
      "All games are playable directly in your browser. No downloads or installations required.",
  },
  {
    icon: Sparkles,
    title: "Always Updated",
    description:
      "We regularly add new games and update our collection to keep the experience fresh.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Game Hub
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your central destination for web-based gaming entertainment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-12 space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            Game Hub was created with a simple mission: to bring together the
            best web-based games in one easy-to-use platform. Whether you are a
            casual gamer looking for a quick break or a dedicated player
            exploring new challenges, Game Hub has something for everyone.
          </p>
          <p>
            Our platform serves as a central directory that organizes games by
            category, making it simple to discover new favorites. Each game
            includes a description, instructions, and a direct link to play.
          </p>
          <p>
            We believe gaming should be accessible, fun, and hassle-free. That
            is why we focus exclusively on web-based games that require no
            downloads, no sign-ups, and no special hardware.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-card p-6 text-center shadow-sm"
            >
              <feature.icon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
