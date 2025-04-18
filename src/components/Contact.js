'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    message: '',
    file: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just log the data
    console.log('Submitted Data:', formData)
    alert('Your message has been submitted!')
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Agricultural Experts</h2>
        <p className="text-gray-700 mb-8">
          Submit your inquiries, seek advice, or request additional information. You can also attach images or documents.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Expertise Area</label>
            <input
              type="text"
              name="expertise"
              placeholder="e.g., Pest Control, Rice Farming"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Attach File (optional)</label>
            <input
              type="file"
              name="file"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
