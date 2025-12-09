"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Play, Copy, Check } from "lucide-react"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`<script src="https://cdn.bridgit.ai/search.js" data-site="your-site-id"></script>`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-300 dark:bg-violet-900/40 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-300 dark:bg-purple-900/40 rounded-full blur-[100px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100 dark:bg-violet-950/30 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8 shadow-lg shadow-violet-500/10 border border-violet-200 dark:border-violet-800">
            <Sparkles className="w-4 h-4" />
            AI-Powered Search for Everyone
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Go from URL to Live AI Search in{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              2 Minutes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Transform any website into an intelligent, discoverable destination with beautifully embeddable AI-powered
            search. No backend. No infrastructure. Just paste one script tag.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 h-14 text-base rounded-xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Free - No Credit Card
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 h-14 text-base bg-background rounded-xl group border-2 hover:border-violet-300 dark:hover:border-violet-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="w-4 h-4 mr-2 group-hover:text-violet-600 transition-colors" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-8">
          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_20px_70px_-15px_rgba(139,92,246,0.3)] dark:shadow-[0_20px_70px_-15px_rgba(139,92,246,0.2)] bg-zinc-950">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/30" />
                </div>
                <span className="text-xs text-zinc-500 ml-2 font-mono">index.html</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-violet-600 text-zinc-400 hover:text-white text-xs transition-all duration-200 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto">
              <div className="text-zinc-500">{"<!-- Add this to your site -->"}</div>
              <div className="mt-2">
                <span className="text-pink-400">{"<script"}</span>
                <span className="text-violet-400">{" src"}</span>
                <span className="text-zinc-400">{"="}</span>
                <span className="text-green-400">{'"https://cdn.bridgit.ai/search.js"'}</span>
              </div>
              <div className="pl-8">
                <span className="text-violet-400">data-site</span>
                <span className="text-zinc-400">{"="}</span>
                <span className="text-green-400">{'"your-site-id"'}</span>
                <span className="text-pink-400">{">"}</span>
              </div>
              <div>
                <span className="text-pink-400">{"</script>"}</span>
              </div>
              <div className="mt-4 text-zinc-600">{"<!-- That's it. You're done! 🚀 -->"}</div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-16 top-8 bg-background border border-border rounded-2xl p-4 shadow-2xl shadow-black/10 dark:shadow-black/30 hidden lg:flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 dark:from-green-950 dark:to-green-900 flex items-center justify-center shadow-inner">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">1 Line of Code</div>
              <div className="text-xs text-muted-foreground">That's all you need</div>
            </div>
          </div>

          <div className="absolute -left-4 lg:-left-16 bottom-8 bg-background border border-border rounded-2xl p-4 shadow-2xl shadow-black/10 dark:shadow-black/30 hidden lg:flex items-center gap-3 z-20 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-950 dark:to-violet-900 flex items-center justify-center shadow-inner">
              <Zap className="w-6 h-6 text-violet-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">{"<100ms"}</div>
              <div className="text-xs text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {[
            { value: "2 min", label: "Setup Time" },
            { value: "<100ms", label: "Response Time" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "70%", label: "Cheaper than Algolia" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-background border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
