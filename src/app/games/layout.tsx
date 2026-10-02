import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Game Hub - Online Party Games & Games to Play With Friends",
  },
  description:
    "Browse and play web-based games with friends, including Tic Tac Toe, Memory Game, Snake, Hangman, quizzes, and party games like Who's the Spy, King's Cup, and Drunk Cards.",
  alternates: {
    canonical: "/games",
  },
}

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
