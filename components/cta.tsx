import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">Ready to build the future?</h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            Join hundreds of founders and enterprise leaders who trust us with their digital transformation.
          </p>

          <Button className="bg-white hover:bg-gray-100 text-gray-900 rounded-full px-8 py-6 text-lg font-semibold">
            Book your consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
