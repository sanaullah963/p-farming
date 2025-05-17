'use client'

export default function FarmingGuides() {
  const guides = [
    {
      title: "Organic Rice Cultivation",
      description: "Step-by-step tutorial on growing organic rice effectively.",
      videoUrl: "https://www.youtube.com/embed/J_mMS3EkHok?si=xZ6GpsAJwgCEcyrc",
    },
    {
      title: "Drip Irrigation Setup",
      description: "Learn how to set up and maintain a drip irrigation system.",
      videoUrl: "https://www.youtube.com/embed/gyBs0Zn_M5A?si=vQy4umhzotcWwUn2",
    },
    {
      title: "Seasonal Vegetable Farming",
      description: "Tips for growing vegetables based on seasonal changes.",
      videoUrl: "https://www.youtube.com/embed/OzGudoy7keA?si=7Am_2r7_gwQmOPpS",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Farming Guides</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Collection of guides and tutorials covering various aspects of farming practices, techniques, and
          methodologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-gtay-200 shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src={guide.videoUrl}
                  title={guide.title}
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{guide.title}</h3>
                <p className="text-gray-600 text-sm my-2">{guide.description}</p>
                <a
                  href={guide.videoUrl.replace("/embed/", "/watch?v=")} // Convert embed to watch format
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                >
                  Watch Now
                </a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
