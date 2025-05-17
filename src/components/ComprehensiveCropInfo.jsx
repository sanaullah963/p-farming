'use client'
import React from 'react'

const sections = [
  {
    title: 'Varieties',
    description:
      'Information about the different types of each crop. For example, for rice – BRRI dhan28, BRRI dhan29, etc., with their yield potential and resistance to diseases.',
    examples: [
      { name: 'BRRI dhan28', detail: 'High yield, Boro season' },
      { name: 'BRRI dhan29', detail: 'Suitable for irrigated land' },
      { name: 'BRRI dhan63', detail: 'Drought tolerant' },
      { name: 'BRRI dhan92', detail: 'Salt tolerant' },
      { name: 'BRRI dhan75', detail: 'Pest resistant' },
      { name: 'BR11', detail: 'Suitable for Aman season' },
      { name: 'Hybrid dhan', detail: 'Faster growth, more yield' },
      { name: 'IRRI dhan', detail: 'Suitable for dry season' },
      { name: 'Parija', detail: 'Early maturing variety' },
      { name: 'NERICA', detail: 'Upland rice variety' },
    ],
  },
  {
    title: 'Cultivation Methods',
    description:
      'Step-by-step guidelines on how to grow the crop — including seed treatment, sowing techniques, spacing, irrigation, and fertilization methods.',
    examples: [
      { name: 'Land Preparation', detail: 'Ploughing and leveling' },
      { name: 'Seed Treatment', detail: 'Fungicide or fertilizer soak' },
      { name: 'Sowing', detail: 'Direct or nursery-based methods' },
      { name: 'Spacing', detail: 'Between rows and plants' },
      { name: 'Irrigation', detail: 'Scheduling based on crop stage' },
      { name: 'Intercultural', detail: 'Weeding and hoeing' },
      { name: 'Fertilizer', detail: 'Use of urea, DAP, compost' },
      { name: 'Pest Control', detail: 'Organic or chemical methods' },
      { name: 'Growth Monitoring', detail: 'Regular observation' },
      { name: 'Harvesting', detail: 'At maturity stage' },
    ],
  },
  {
    title: 'Soil Requirements',
    description:
      'Details about the ideal soil type for each crop, pH level, drainage conditions, and necessary nutrients.',
    examples: [
      { name: 'Rice', detail: 'Clay or loamy soil, water-retentive' },
      { name: 'Wheat', detail: 'Well-drained loamy, pH 6.0–7.5' },
      { name: 'Potato', detail: 'Sandy loam with good drainage' },
      { name: 'Sugarcane', detail: 'Deep fertile loamy soil' },
      { name: 'Tomato', detail: 'Sandy loam, slightly acidic' },
      { name: 'Jute', detail: 'Silty loam, well-aerated' },
      { name: 'Onion', detail: 'Loose fertile soil with organic matter' },
      { name: 'Banana', detail: 'Rich alluvial soil' },
      { name: 'Groundnut', detail: 'Well-drained sandy loam' },
      { name: 'Mustard', detail: 'Light to medium loam, non-acidic' },
    ],
  },
  {
    title: 'Harvesting Techniques',
    description:
      'Right time to harvest, how to harvest efficiently, post-harvest handling, and storage methods.',
    examples: [
      { name: 'Rice', detail: '80–85% grains turn golden' },
      { name: 'Wheat', detail: 'Grains hard, <20% moisture' },
      { name: 'Potato', detail: 'After yellowing of leaves' },
      { name: 'Tomato', detail: 'Harvest semi-ripe for transport' },
      { name: 'Mango', detail: 'Pick when mature green' },
      { name: 'Maize', detail: 'Cobs dry, kernels hard' },
      { name: 'Mustard', detail: 'When 75% pods are yellow-brown' },
      { name: 'Sugarcane', detail: 'After 10–12 months' },
      { name: 'Banana', detail: 'Harvest bunch before full ripening' },
      { name: 'Jute', detail: 'When flowering starts' },
    ],
  },
]

export default function ComprehensiveCropInfo() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">Comprehensive Crop Information</h2>

        {sections.map((section, i) => (
          <div key={i} className="mb-16">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{section.title}</h3>
              <p className="text-gray-700 mb-6">{section.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.examples.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition duration-300"
                  >
                    <h4 className="text-green-800 font-semibold text-lg">{item.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
