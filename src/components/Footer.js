import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🌾 Sorvewa</h2>
          <p className="text-sm">
            Your trusted hub for agricultural knowledge. Helping farmers thrive with accurate and practical information.
          </p>
        </div>

        {/* Right: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="#about" className="hover:underline">About the Hub</Link></li>
            <li><Link href="#guides" className="hover:underline">Farming Guides</Link></li>
            <li><Link href="#crops" className="hover:underline">Crop Details</Link></li>
            <li><Link href="#pests" className="hover:underline">Pest Control</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4">
        &copy; {new Date().getFullYear()} Sorvewa. All rights reserved.
      </div>
    </footer>
  )
}
