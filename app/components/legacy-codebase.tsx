import { Check } from "lucide-react"

export default function LegacyCodebase() {
  const benefits = [
    "Reduce development time by 50%",
    "Pixel-perfect implementation",
    "Enterprise-grade security",
    "Scalable architecture default",
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Stop wrestling with <span className="text-indigo-600">legacy codebases</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our modern approach allows you to bypass technical debt and focus on what matters: delivering value to
              your customers. We handle the complexity so you don't have to.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50 rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
            <div className="flex items-end gap-3">
              <div className="w-12 h-32 bg-indigo-300 rounded-lg"></div>
              <div className="w-12 h-48 bg-indigo-400 rounded-lg"></div>
              <div className="w-12 h-64 bg-indigo-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
