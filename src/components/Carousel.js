'use client'
import { Carousel } from 'react-responsive-carousel'

export default function FullCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={4000}
      className="w-full h-[90vh]">
      <div>
        <img src="/carousel1.jpg" className="object-cover w-full h-[90vh]" />
      </div>
      <div>
        <img src="/carousel2.jpg" className="object-cover w-full h-[90vh]" />
      </div>
      <div>
        <img src="/carousel3.jpg" className="object-cover w-full h-[90vh]" />
      </div>
    </Carousel>
  )
}
