'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function PestControl() {
  const [selectedItem, setSelectedItem] = useState(null)

  const strategies = [
    {
      name: 'Biological Control',
      description: 'Utilizing natural predators to manage pest populations in crops sustainably.',
      image: '/crops/pest1.jpg',
    },
    {
      name: 'Organic Remedies',
      description: 'Using neem oil, garlic spray, and other natural solutions to repel pests.',
      image: '/crops/pest2.jpg',
    },
    {
      name: 'Early Detection Tips',
      description: 'Monitor crops regularly to detect infestations early and take preventive steps.',
      image: '/crops/pest3.jpg',
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
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
                <button
                  onClick={() => setSelectedItem(item)}
                  className="cursor-pointer mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg max-w-2xl w-full p-6 relative border border-green-100 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-green-800 hover:text-red-600 text-4xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image */}
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={800}
              height={400}
              className="w-full h-72 md:h-96 object-cover rounded-xl mb-4"
            />

            {/* Content */}
            {/* Content */}
            <h3 className="text-3xl font-bold text-green-800 mb-3">{selectedItem.name}</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">{selectedItem.description}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec lectus vitae lorem pretium
              tincidunt. Mauris dignissim dolor vel nibh fermentum, in pulvinar purus pretium. Integer consequat sem
              sit amet erat sodales, ac ultrices metus fringilla. Vivamus vel vulputate mi. Sed vel felis id orci
              malesuada sollicitudin. Curabitur eu nunc urna. Morbi a felis lacus. Nullam ac blandit odio. Pellentesque
              pretium efficitur neque, eget tincidunt nisl. Aliquam ut porttitor sapien, nec feugiat ligula. Duis
              tincidunt velit ac faucibus varius. Etiam at nunc turpis. Pellentesque a pulvinar metus. Fusce vitae
              faucibus nisl, non pulvinar libero. Sed lobortis tortor et est dictum, eget porttitor erat iaculis. Nam
              bibendum nunc non malesuada blandit. Sed scelerisque, augue at iaculis sodales, eros felis porta turpis,
              at feugiat purus orci et sem.
            </p>

            {/* Bottom Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
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
