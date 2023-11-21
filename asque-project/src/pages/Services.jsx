import Navbar from "../components/Navbar"
import connectImg from '../assets/images/connect.png'
import sellImg from '../assets/images/sell.png'
import deliveryImg from '../assets/images/delivery.png'
import Footer from "../components/Footer"
import { useEffect } from "react"

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className="container services-div">
                <h3>Our services</h3>
                <div className="row align-items-end service-row">
                    <div className="col-lg-4">
                        <div className="services-img-box">
                            <img src={connectImg} className='img-fluid' alt="connect-visual" />
                        </div>
                    </div>
                    <div className="col-lg-8 text-div">
                        <div className="number-circle">1</div>
                        <h4>Connect You with more buyers</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur magni amet doloremque aspernatur inventore non aut temporibus quas? Repellat?</p>
                    </div>
                </div>
                <div className="row align-items-end service-row">
                    <div className="col-lg-8 text-div">
                        <div className="number-circle">2</div>
                        <h4>Sell more Products</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur magni amet doloremque aspernatur inventore non aut temporibus quas? Repellat?</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="services-img-box serv-img-2">
                            <img src={sellImg} className='img-fluid' alt="selling-visual" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-end service-row">
                    <div className="col-lg-4">
                        <div className="services-img-box">
                            <img src={deliveryImg} className='img-fluid' alt="delivery-visual" />
                        </div>
                    </div>
                    <div className="col-lg-8 text-div">
                        <div className="number-circle">3</div>
                        <h4>Expert Product Delivery</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur magni amet doloremque aspernatur inventore non aut temporibus quas? Repellat?</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services