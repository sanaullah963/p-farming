import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import React from 'react'

function page() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
         <Banner image={'/banner4.jpg'} />
       <Contact/>   
    </div>
  )
}

export default page