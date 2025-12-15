import { Compass, Rocket, Code } from "lucide-react"

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Explore",
      description: "We deep dive into your business goals and technical requirements to map out the perfect solution.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Design",
      description: "Our UI/UX experts craft stunning, user-centric interfaces that align with your brand identity.",
      icon: Rocket,
    },
    {
      number: "03",
      title: "Build",
      description:
        "We develop your product using modern tech stacks, ensuring performance, accessibility, and scalability.",
      icon: Code,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">How we work</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-indigo-200 hidden md:block"></div>

            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                >
                  <div className={`space-y-4 ${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                    <span className="text-sm text-indigo-600 font-semibold">Step {step.number}</span>
                    <h3 className="text-3xl font-bold">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  <div
                    className={`flex justify-center ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-indigo-200 rounded-3xl blur-2xl opacity-30"></div>
                      <div className="relative bg-white rounded-3xl p-12 shadow-lg">
                        <step.icon className="w-16 h-16 text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-gray-50 hidden md:block"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
