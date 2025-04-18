'use client'
import Image from 'next/image'

export default function PestControl() {
  const strategies = [
    {
      name: 'Biological Control',
      description: 'Utilizing natural predators to manage pest populations in crops sustainably.',
      image: '/crops/card1.jpg',
    },
    {
      name: 'Organic Remedies',
      description: 'Using neem oil, garlic spray, and other natural solutions to repel pests.',
      image: '/crops/card2.jpg',
    },
    {
      name: 'Early Detection Tips',
      description: 'Monitor crops regularly to detect infestations early and take preventive steps.',
      image: '/crops/card3.jpg',
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Pest Control Strategies</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Integrated pest management (IPM) strategies including biological controls, organic remedies, and tips for early detection and treatment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{item.name}</h3>
                <p className="text-gray-600 text-sm my-2">{item.description}</p>
                <button className="cursor-pointer mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
