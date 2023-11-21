import { useEffect, useState } from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import paypalImg from '../assets/images/paypal.png'
import mastercardImg from '../assets/images/mastercard.png'
import visaImg from '../assets/images/visa.png'
import successImg from '../assets/images/success.png'
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import CountryStateCity from "../components/CountryStateCity"

const CheckOut = () => {
    const [useUserAddress, setUseUserAddress] = useState(false)
    const [activeGateway, setActiveGateway] = useState("master")
    const [showSuccessful, setShowSuccessful] = useState(false)
    const { pathname } = useLocation();
    let location = useLocation();
    let navigate = useNavigate()
    let totalAmount = location.state?.finalTotal || 1234
    let userIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

    const generateUUID = () => {
        let
            d = new Date().getTime(),
            d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
    };

    const submitCardDetails = (e) => {
        e.preventDefault()
        let theCart = JSON.parse(localStorage.getItem("asqueCart"))
        let randomID = generateUUID()
        // console.log(randomID)
        let orderDict = { order: [randomID, theCart.toString()] }
        // console.log(orderDict)
        // console.log(" ")
        localStorage.setItem("orderItem", null) // clean the order item
        localStorage.setItem("orderItem", JSON.stringify(orderDict)) // add recent order
        localStorage.setItem("asqueCart", null)
        setShowSuccessful(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!userIsAuthenticated) {
            navigate('/login', { state: { previousPath: pathname } })
        }
    }, [userIsAuthenticated])

    useEffect(() => {
        if (showSuccessful) {
            document.body.style["overflow-y"] = "hidden";
        } else {
            document.body.style["overflow-y"] = "auto";
        }
    }, [showSuccessful]);

    return (
        <>
            <Navbar />
            <div className="container checkout-container">
                <div className="row checkout-div">
                    <div className="col-lg-5">
                        <div className="details-div">
                            {!useUserAddress && (
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input placeholder="First name" type="text" required id="firstName" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input placeholder="Last name" type="text" required id="lastName" className="form-control" />
                                    </div>
                                    <CountryStateCity />
                                    <div className="form-group">
                                        <label htmlFor="address">Address *</label>
                                        <input placeholder="Address" type="text" required id="address" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone *</label>
                                        <input placeholder="Phone" type="text" required id="phone" className="form-control" />
                                    </div>
                                </form>
                            )}
                            <div className="filter-checkboxes">
                                <input onChange={() => setUseUserAddress(!useUserAddress)} type="checkbox" id="useAddress" />
                                <label htmlFor="useAddress">Use my address</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="gateway-div">
                            <div className="row payment-gateways">
                                <div className="col-lg-4">
                                    <div
                                        className={activeGateway === "paypal" ? "paypal-div active" : "paypal-div"}
                                        onClick={() => setActiveGateway("paypal")}
                                    >
                                        <div className="paypal-img-wrapper">
                                            <img src={paypalImg} className="img-fluid" alt="paypal" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className={activeGateway === "master" ? "master-div active" : "master-div"}
                                        onClick={() => setActiveGateway("master")}
                                    >
                                        <div className="paypal-img-wrapper">
                                            <img src={mastercardImg} className="img-fluid" alt="paypal" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className={activeGateway === "visa" ? "visa-div active" : "visa-div"}
                                        onClick={() => setActiveGateway("visa")}
                                    >
                                        <div className="paypal-img-wrapper">
                                            <img src={visaImg} className="img-fluid" alt="paypal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={submitCardDetails} className="gateway-form">
                                <div className="form-group">
                                    <label htmlFor="cardNumber">Card Number</label>
                                    <input required placeholder="Enter the 16 digit on your card" type="number" id="cardNumber" className="card-number form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cardName">Name on the card</label>
                                    <input required placeholder="Enter full name" type="text" id="cardName" className="card-name form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="validUntil">Valid until</label>
                                    <input required placeholder="MM/YYYY" type="text" id="validUntil" className="valid-until form-control" />
                                </div>
                                <button className="pay-button">Pay ${totalAmount}</button>
                            </form>
                        </div>
                    </div>
                </div>
                {showSuccessful && (
                    <div className={showSuccessful ? "modal-background" : 'modal-background hidden'}>
                        <div className="modal-container">
                            <div className="modal-body">
                                {/* <div className="img-wrapper"> */}
                                <img src={successImg} alt="success" className="img-fluid" />
                                {/* </div> */}
                                <h3>PAYMENT SUCCESSFUL</h3>
                                <p>Your order was placed.</p>
                                {/* <div className="span-number"> */}
                                <span>Order number is <b>2894</b>. You can always track its status in My Order page.</span>
                                {/* </div> */}
                                <div className="checkout-cta">
                                    <NavLink to="/user/dashboard" state={"show orders"} className="view-order-btn">View order</NavLink>
                                    <NavLink to="/user/dashboard" className="dashboard-btn">Go to dashboard</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default CheckOut