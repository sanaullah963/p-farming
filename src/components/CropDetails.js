'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function CropDetails() {
  const [selectedCrop, setSelectedCrop] = useState(null)

  const crops = [
    {
      name: 'Wheat',
      description: 'Nutrient-rich grain crop ideal for temperate regions. Requires well-drained loamy soil.',
      image: '/crops/rice.jpg',
    },
    {
      name: 'Tomato',
      description: 'High-yielding vegetable with multiple culinary uses. Grows best in warm, sunny climates.',
      image: '/crops/tometo.jpg',
    },
    {
      name: 'Mango',
      description: 'Popular tropical fruit known for its sweet flavor. Needs hot, dry weather and deep soil.',
      image: '/crops/mango.jpg',
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Crop Details</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Comprehensive information on different crops including varieties, cultivation methods, soil requirements, and harvesting techniques.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crops.map((crop, idx) => (
            <div
              key={idx}
              className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition hover:shadow-xl hover:scale-105 duration-300"
            >
              <Image
                src={crop.image}
                alt={crop.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{crop.name}</h3>
                <p className="text-gray-600 text-sm my-2">{crop.description}</p>
                <button
                  onClick={() => setSelectedCrop(crop)}
                  className="cursor-pointer mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ➕ New Detailed Information Section */}
        
      </div>

      {/* Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg max-w-2xl w-full p-6 relative border border-green-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCrop(null)}
              className="absolute top-4 right-4 text-green-800 hover:text-red-600 text-4xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <Image
              src={selectedCrop.image}
              alt={selectedCrop.name}
              width={800}
              height={400}
              className="w-full h-72 md:h-96 object-cover rounded-xl mb-4"
            />

            <h3 className="text-3xl font-bold text-green-800 mb-3">{selectedCrop.name}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{selectedCrop.description}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              [Add additional content or crop-specific detailed information here if needed]
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCrop(null)}
                className="mt-2 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
    </section>
  )
}
