import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import emptyCart from '../assets/images/empty-cart.png'
import Footer from "../components/Footer"
import { allArtData } from "../assets/data"
import { useEffect, useState } from "react"

const Cart = () => {
    const [finalTotal, setfinalTotal] = useState(0)
    const [cartDataToRender, setCartDataToRender] = useState(0)
    const [cartCount, setCartCount] = useState(0)
    const [orderTotal, setOrderTotal] = useState(0)
    const [theTotal, setTheTotal] = useState(0)
    // let cartCount = 0
    // let orderTotal = 0
    // let finalTotal = 0

    useEffect(() => {
        let getCount = JSON.parse(localStorage.getItem("asqueCart"))
        let cartData = []
        if (getCount !== null) {
            // cartCount = getCount.length
            setCartCount(getCount.length)
            for (let i = 0; i < getCount.length; i++) {
                let query = allArtData.filter(art => art.id === getCount[i])
                // console.log(query)
                cartData.push(...query)
            }
            setCartDataToRender(cartData)

            let getPrices = cartData.map((item) => item.price);
            let grandTotal = getPrices
                .map((price) => price)
                .reduce(function (x, y) {
                    return x + y;
                }, 0);
            // orderTotal = grandTotal
            // finalTotal = grandTotal
            setOrderTotal(grandTotal)
            setTheTotal(grandTotal)
            setfinalTotal(grandTotal)
        }
    }, [])

    // console.log(cartDataToRender)

    const removeFromCart = (id) => {
        let getCart = JSON.parse(localStorage.getItem("asqueCart"))
        console.log(getCart)
        let newCart = getCart.filter(num => num !== id)
        localStorage.setItem("asqueCart", JSON.stringify(newCart))
    }

    const handleShippingChange = () => {
        let shippingOption = document.getElementById('shippingInput').value
        // console.log(shippingOption)
        // console.log(typeof shippingOption)
        let newTotal = theTotal + parseInt(shippingOption)
        setfinalTotal(newTotal)
    }

    // console.log(finalTotal)


    useEffect(() => {
        return
    }, [finalTotal])




    return (
        <>
            <Navbar />
            {cartCount === 0 ? (
                <div className="cart empty-cart">
                    <div className="empty-cart-wrapper">
                        <img src={emptyCart} alt="empty-cart" className="img-fluid" />
                    </div>
                    <h3>Cart is Empty</h3>
                    <NavLink to="/shop">Go Shopping</NavLink>
                </div>
            ) : (
                <>
                    <div className="container cart-div">
                        <div className="row ml-auto first-row">
                            <div className="col-lg-6 the-cart">
                                <div className="the-cart-div">
                                    <div className="cart-title">
                                        <h4>Shopping Cart</h4>
                                        <h5>{cartCount} {cartCount === 1 ? `item` : `items`}</h5>
                                    </div>
                                    <hr />
                                    {cartDataToRender.map(art => (
                                        <div key={art.id} className="row mb-3">
                                            <div className="col-lg-3">
                                                <div className="cart-img-wrapper">
                                                    <img
                                                        src={art.image}
                                                        alt={art.name}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <span className="item-name">{art.name}</span>
                                                <span className="item-artist">{art.artist}</span>
                                            </div>
                                            <div className="col-lg-2">
                                                <span className="item-price">
                                                    ${art.price}
                                                </span>
                                            </div>
                                            <div className="col-lg-2">
                                                <i onClick={() => removeFromCart(art.id)} className="fa fa-times"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-4 the-summary">
                                <div className="summary-div">
                                    <h4>Order Summary</h4>
                                    <hr />
                                    <div className="order-total">
                                        <span className="total-text">Order total</span>
                                        <span className="total-price">${orderTotal}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="shippingInput">Shipping</label>
                                        <select onChange={() => handleShippingChange()} className="form-control" name="shipping-options" id="shippingInput">
                                            <option value="0"></option>
                                            <option value="5">Standard Delivery - $5.00</option>
                                            <option value="20">Canvas Painting - $20.00</option>
                                            <option value="0">Digital Print - $0.00</option>
                                        </select>
                                    </div>
                                    <div className="form-group promo-div">
                                        <label htmlFor="promoCode">Promo code</label>
                                        <input type="text" id="promoCode" className="form-control" />
                                    </div>
                                    <hr />
                                    <div className="total-cost">
                                        <span className="final-text">Total cost</span>
                                        <span className="final-price">${finalTotal}</span>
                                    </div>
                                    <hr />
                                </div>
                                <div className="cart-cta-links">
                                    <NavLink to="/shop/checkout" state={{ finalTotal }} className="checkout-btn">
                                        Checkout
                                    </NavLink>
                                    <NavLink to="/shop" className="go-shopping-btn">
                                        Continue Shopping
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <Footer />
        </>
    )
}

export default Cart