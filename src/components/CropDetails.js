'use client'
import Image from 'next/image'

export default function CropDetails() {
  const crops = [
    {
      name: 'Wheat',
      description: 'Nutrient-rich grain crop ideal for temperate regions. Requires well-drained loamy soil.',
      image: '/crops/card1.jpg',
    },
    {
      name: 'Tomato',
      description: 'High-yielding vegetable with multiple culinary uses. Grows best in warm, sunny climates.',
      image: '/crops/card2.jpg',
    },
    {
      name: 'Mango',
      description: 'Popular tropical fruit known for its sweet flavor. Needs hot, dry weather and deep soil.',
      image: '/crops/card3.jpg',
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
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
                <button className="cursor-pointer mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
