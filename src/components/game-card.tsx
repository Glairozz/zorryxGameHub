"use client"

import { motion } from "framer-motion"
import { ExternalLink, Play } from "lucide-react"
import type { Game } from "@/data/games"

interface GameCardProps {
  game: Game
  index: number
}

export default function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group/card"
    >
      <div className="flex flex-col overflow-hidden rounded-xl bg-card shadow-md ring-1 ring-foreground/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video overflow-hidden bg-muted"
        >
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 p-8">
            <span className="text-6xl font-bold text-primary/30">
              {game.name.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/card:bg-black/40">
            <Play className="h-12 w-12 text-white opacity-0 transition-all duration-300 group-hover/card:opacity-100" />
          </div>
        </a>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <a
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              {game.name}
            </a>
            <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {game.category}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {game.description}
          </p>

          <div className="mt-auto space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Instructions
            </h4>
            <ol className="space-y-1">
              {game.instructions.map((instruction, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {i + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Play className="h-4 w-4" />
            Play Now
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
