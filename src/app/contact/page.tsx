"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, suggestion, or feedback? We would love to hear from
            you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">
                  hello@gamehub.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Social Media</h3>
                <p className="text-sm text-muted-foreground">
                  @gamehub on Twitter, Instagram, and Discord
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-muted-foreground">
                  San Francisco, California
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
