import Image from 'next/image'

function About() {
  return (
    <header className="px-4 bg-white py-12 max-w-7xl mx-auto space-y-16">
        {/* About This Hub Section */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="/about-hub.jpg"
              alt="About the Hub"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-green-700">About This Hub</h2>
            <p className="text-gray-700">
              Sorvewa is a comprehensive digital hub designed to support farmers and agricultural enthusiasts.
              Here you will find expert guides, crop-specific advice, and eco-friendly solutions to make your farming smarter and more efficient.
            </p>
            <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
              Learn More
            </button>
          </div>
        </section>


      </header>
  )
}

export default About