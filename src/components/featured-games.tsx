"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { games } from "@/data/games"

const featuredGames = games.filter((g) => g.featured)

export default function FeaturedGames() {
  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Games
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our most popular games handpicked for you. Start playing in seconds.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl bg-card shadow-md ring-1 ring-foreground/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <span className="text-5xl font-bold text-primary/30">
                    {game.name.charAt(0)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {game.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {game.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Play now <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/games"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            View All Games
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
