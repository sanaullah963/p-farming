'use client'
import { useState } from 'react'
import Image from 'next/image'

const cropSections = [
  {
    title: 'Varieties',
    items: [
      {
        name: 'BRRI dhan28',
        desc: 'High yield, Boro season',
        image: '/crops/rice.jpg',
      },
      {
        name: 'BRRI dhan29',
        desc: 'Suitable for irrigated land',
        image: '/crops/rice.jpg',
      },
      {
        name: 'BRRI dhan75',
        desc: 'Pest resistant variety for Aman season',
        image: '/crops/rice.jpg',
      },
    ],
  },
  {
    title: 'Cultivation Methods',
    items: [
      {
        name: 'Land Preparation',
        desc: 'Ploughing, leveling, and weed removal',
        image: '/icons/land.png',
      },
      {
        name: 'Seed Treatment',
        desc: 'Use fungicide or soak in fertilizer',
        image: '/icons/seed.png',
      },
      {
        name: 'Irrigation',
        desc: 'Schedule water at key growth stages',
        image: '/icons/water.png',
      },
    ],
  },
  {
    title: 'Soil Requirements',
    items: [
      {
        name: 'Rice',
        desc: 'Clay or loamy soil with good water retention',
        image: '/crops/rice.jpg',
      },
      {
        name: 'Tomato',
        desc: 'Sandy loam, slightly acidic soil',
        image: '/crops/tometo.jpg',
      },
      {
        name: 'Wheat',
        desc: 'Loamy soil with pH 6.0–7.5',
        image: '/crops/wheat.jpg',
      },
    ],
  },
  {
    title: 'Harvesting Techniques',
    items: [
      {
        name: 'Rice',
        desc: 'Harvest when 85% grains turn golden',
        image: '/crops/rice.jpg',
      },
      {
        name: 'Mango',
        desc: 'Pick when mature green, ripen later',
        image: '/crops/mango.jpg',
      },
      {
        name: 'Potato',
        desc: 'Uproot after leaves start yellowing',
        image: '/crops/potato.jpg',
      },
    ],
  },
]

export default function CropInfoSection() {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (idx) => {
    setActiveSection(activeSection === idx ? null : idx)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Comprehensive Crop Information
        </h2>

        {cropSections.map((section, idx) => (
          <div key={idx} className="mb-8 border border-green-200 rounded-lg shadow-sm">
            {/* Accordion Header */}
            <button
              onClick={() => toggleSection(idx)}
              className="w-full text-left px-6 py-4 bg-green-100 hover:bg-green-200 transition font-semibold text-lg text-green-800 rounded-t-lg"
            >
              {section.title}
            </button>

            {/* Accordion Content */}
            {activeSection === idx && (
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-50 rounded-b-lg">
                {section.items.map((item, subIdx) => (
                  <div
                    key={subIdx}
                    className="bg-white shadow-md rounded-xl overflow-hidden p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-cover rounded-md mb-4"
                    />
                    <h4 className="text-xl font-semibold text-green-800">{item.name}</h4>
                    <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
