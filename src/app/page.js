import About from '@/components/About'
import FullCarousel from '@/components/Carousel'
import Contact from '@/components/Contact'
import CropDetails from '@/components/CropDetails'
import FarmingGuides from '@/components/FarmingGuides'
import HubPurpose from '@/components/HubPurpose'
import PestControl from '@/components/PestControl'


export default function Home() {
  return (
    <main>
      {/* navbar */}
      <FullCarousel />
      <About />
      <HubPurpose />
      <FarmingGuides />
      <CropDetails />
      <PestControl />
      <Contact />

    </main>
  )
}
