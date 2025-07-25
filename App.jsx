import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductSlider from './components/ProductSlider'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-chalkboard min-h-screen">
      <Header />
      <HeroSection />
      <ProductSlider />
      <Services />
      <Footer />
    </div>
  )
}
