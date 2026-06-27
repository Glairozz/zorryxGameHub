"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import GameCard from "@/components/game-card"
import SearchBar from "@/components/search-bar"
import { games, categories } from "@/data/games"

export default function GamesPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.name
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesCategory =
        activeCategory === "All" || game.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All Games
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of web-based games. Click on any game to start
            playing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="w-full sm:w-72">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </motion.div>

        {filteredGames.length === 0 ? (
          <div className="mt-20 text-center">
            <p className="text-lg text-muted-foreground">
              No games found matching your search.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
