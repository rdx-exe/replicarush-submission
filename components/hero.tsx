import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-sky-100 via-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-indigo-200 text-sm text-indigo-600">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            Accepting new projects for Q1
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Turn your expertise into <span className="text-indigo-600">AI-powered Reality</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We help ambitious brands and startups design, build, and scale world-class digital products with a focus on
            comprehensive design and robust engineering.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg h-14 w-48 flex items-center justify-center">
              Start Project →
            </Button>
            <Button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full h-14 w-48 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Reel
            </Button>
          </div>

          <div className="pt-16">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="flex items-center justify-center gap-12 opacity-40">
              <span className="text-lg font-semibold">Company A</span>
              <span className="text-lg font-semibold">Startup B</span>
              <span className="text-lg font-semibold">Enterprise C</span>
              <span className="text-lg font-semibold">Tech D</span>
              <span className="text-lg font-semibold">Global E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
