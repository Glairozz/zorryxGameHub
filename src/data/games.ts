export interface Game {
  id: string
  name: string
  description: string
  instructions: string[]
  image: string
  url: string
  category: string
  featured: boolean
}

export const games: Game[] = [
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    description:
      "Tic Tac Toe is a classic strategy game played by two players who take turns placing X and O on a 3x3 board. The first to get three in a row wins.",
    instructions: [
      "Choose your symbol (X or O) and start the game.",
      "Take turns placing your symbol on the grid.",
      "Get three in a row horizontally, vertically, or diagonally.",
      "Block your opponent while building your own line.",
      "Win the game or play to a draw if the board fills up.",
    ],
    image: "/images/tic-tac-toe.svg",
    url: "https://playtictactoe.org",
    category: "Strategy",
    featured: true,
  },
  {
    id: "memory-game",
    name: "Memory Game",
    description:
      "Memory Game is a fun brain-training game where players flip cards to find matching pairs. Test and improve your memory with every round.",
    instructions: [
      "Click on a card to flip it and reveal the image.",
      "Click on another card to find its match.",
      "If the two cards match, they stay face up.",
      "If they don't match, they flip back over.",
      "Match all pairs in the fewest moves to win.",
    ],
    image: "/images/memory-game.svg",
    url: "https://www.coolmathgames.com/0-memory",
    category: "Puzzle",
    featured: true,
  },
  {
    id: "snake-game",
    name: "Snake Game",
    description:
      "Snake Game is an arcade classic where you control a growing snake. Eat food to grow longer without crashing into walls or yourself.",
    instructions: [
      "Use arrow keys or swipe to control the snake's direction.",
      "Eat food items to grow longer and earn points.",
      "Avoid hitting the walls or the snake's own body.",
      "The snake speeds up as it grows longer.",
      "Try to achieve the highest score possible.",
    ],
    image: "/images/snake-game.svg",
    url: "https://playsnake.org",
    category: "Arcade",
    featured: true,
  },
  {
    id: "hangman",
    name: "Hangman",
    description:
      "Hangman is a classic word-guessing game where players try to guess a hidden word one letter at a time before the hangman is fully drawn.",
    instructions: [
      "A hidden word is shown as blank spaces.",
      "Guess letters one at a time by clicking or typing.",
      "Correct letters are revealed in the word.",
      "Wrong guesses add parts to the hangman drawing.",
      "Guess the word before the hangman is complete to win.",
    ],
    image: "/images/hangman.svg",
    url: "https://www.hangmanwords.com/play",
    category: "Educational",
    featured: false,
  },
  {
    id: "puzzle-game",
    name: "Puzzle Game",
    description:
      "Puzzle Game challenges your problem-solving skills as you arrange scattered pieces to form a complete picture.",
    instructions: [
      "Select a puzzle image and difficulty level.",
      "Pieces are scattered randomly on the board.",
      "Drag and drop pieces to their correct positions.",
      "Use the preview image as a reference.",
      "Complete the puzzle to see your finishing time.",
    ],
    image: "/images/puzzle-game.svg",
    url: "https://www.jigsawexplorer.com",
    category: "Puzzle",
    featured: true,
  },
  {
    id: "quiz-game",
    name: "Quiz Game",
    description:
      "Quiz Game tests your knowledge across various topics. Answer questions correctly to earn points and climb the leaderboard.",
    instructions: [
      "Choose a category or play a mixed quiz.",
      "Read each question carefully.",
      "Select your answer from the multiple choices.",
      "Correct answers earn points; wrong answers don't.",
      "Complete all questions to see your final score.",
    ],
    image: "/images/quiz-game.svg",
    url: "https://www.sporcle.com",
    category: "Educational",
    featured: false,
  },
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    description:
      "Rock Paper Scissors is a classic hand game where you compete against the computer. Rock beats scissors, scissors beat paper, paper beats rock.",
    instructions: [
      "Choose Rock, Paper, or Scissors by clicking your choice.",
      "The computer randomly selects its move.",
      "Rock crushes Scissors, Scissors cut Paper, Paper covers Rock.",
      "If both choose the same, it's a tie.",
      "Play multiple rounds to determine the overall winner.",
    ],
    image: "/images/rock-paper-scissors.svg",
    url: "https://www.rpsgame.org",
    category: "Arcade",
    featured: true,
  },
]

export const categories = [
  "All",
  "Strategy",
  "Puzzle",
  "Arcade",
  "Educational",
]
