import { Zap, Shield } from "lucide-react"

export default function TailoredStage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Tailored for every stage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you are just starting out or scaling up, we have the specialized workflows to support your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-3xl p-8 space-y-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Startups</h3>
                <p className="text-gray-600 leading-relaxed">
                  Move fast and break nothing. Get your MVP to market in record time with our rapid deployment
                  pipelines.
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-orange-600 font-medium hover:gap-3 transition-all"
              >
                Learn more →
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8 space-y-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Enterprises</h3>
                <p className="text-gray-600 leading-relaxed">
                  Robust, compliant, and scalable. We build systems that can handle millions of users from day one.
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
