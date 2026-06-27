import { Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Game Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your central hub for web-based games. Play, learn, and have fun!
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="space-y-2">
              {["Strategy", "Puzzle", "Arcade", "Educational", "Party"].map(
                (category) => (
                  <li key={category}>
                    <Link
                      href={`/games?category=${category.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Top Games</h3>
            <ul className="space-y-2">
              {[
                "Tic Tac Toe",
                "Memory Game",
                "Snake Game",
                "Rock Paper Scissors",
              ].map((game) => (
                <li key={game}>
                  <span className="text-sm text-muted-foreground">
                    {game}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Game Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
