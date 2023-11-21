import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../components/About"
import { useEffect } from "react"

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <About />
            <Footer />
        </>
    )
}

export default AboutUs