export default function WhyChooseUs() {
  const criteria = [
    {
      name: "Delivery Speed",
      agencies: "Slow (Months)",
      freelancers: "Inconsistent",
      agencyIo: "Rapid (Weeks)",
    },
    {
      name: "Code Quality",
      agencies: "Variable",
      freelancers: "Variable",
      agencyIo: "Standardized & Audited",
    },
    {
      name: "Design",
      agencies: "Outsourced",
      freelancers: "Limited",
      agencyIo: "In-house Expert Choice",
    },
    {
      name: "Scalability",
      agencies: "Often Overlooked",
      freelancers: "Rarely Priority",
      agencyIo: "Built-in Foundation",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Why choose us?</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-6 px-4 text-left text-sm uppercase tracking-wider text-gray-400 font-semibold">
                    CRITERIA
                  </th>
                  <th className="py-6 px-4 text-center text-base font-semibold text-gray-600">Agencies</th>
                  <th className="py-6 px-4 text-center text-base font-semibold text-gray-600">Freelancers</th>
                  <th className="py-6 px-4 text-center text-base font-semibold bg-indigo-50 rounded-t-2xl">
                    <span className="text-indigo-600">Agency.io</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${index === criteria.length - 1 ? "border-b-0" : ""}`}
                  >
                    <td className="py-6 px-4 font-semibold text-gray-700">{row.name}</td>
                    <td className="py-6 px-4 text-center text-gray-500">{row.agencies}</td>
                    <td className="py-6 px-4 text-center text-gray-500">{row.freelancers}</td>
                    <td
                      className={`py-6 px-4 text-center bg-indigo-50 ${
                        index === criteria.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                    >
                      <span className="text-indigo-600 font-semibold">{row.agencyIo}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
