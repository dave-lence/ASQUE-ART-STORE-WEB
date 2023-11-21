import { useEffect } from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import HowItWorks from "../components/HowItWorks"
import LandingPage from "../components/LandingPage"
import Navbar from '../components/Navbar'
import OurProducts from "../components/OurProducts"
import ProductReview from "../components/ProductReview"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <HowItWorks />
      <OurProducts />
      <ProductReview />
      <Footer />
    </>
  )
}

export default Home