'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/farming-guides', label: 'Farming Guides' },
  { href: '/crop-details', label: 'Crop Details' },
  { href: '/pest-control', label: 'Pest Control' },
  { href: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-green-700 text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
        <h1 className="text-xl font-bold cursor-pointer">🌿 Sorvewa</h1>
        </Link>
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-yellow-300">
              {link.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 space-y-2">
          {links.map(link => (
            <Link key={link.href} href={link.href} className="block hover:text-yellow-300">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
