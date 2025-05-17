import Banner from '@/components/Banner'
import ComprehensiveCropInfo from '@/components/ComprehensiveCropInfo'
import CropDetails from '@/components/CropDetails'
import CropInfoSection from '@/components/CropInfoSection'
import React from 'react'

function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Banner image={'/banner2.jpg'} />
      <CropDetails />
      <ComprehensiveCropInfo />
      <CropInfoSection />
    </div>
  )
}

export default page