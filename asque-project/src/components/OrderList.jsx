import { useState } from 'react'
import { allArtData } from "../assets/data"
import './orderlist.css'

const OrderList = () => {
    const [clicked, setClicked] = useState(false)
    const [dataToShow, setDataToShow] = useState([])
    let orderItem = JSON.parse(localStorage.getItem("orderItem"))
    let uuid = ""
    let items = []

    if (orderItem !== null) {
        uuid = orderItem.order[0]
        items = orderItem.order[1].split(',')
    }

    const handleOrderClick = (uuid) => {
        let orderItems = []
        for (let i = 0; i < items.length; i++) {
            let query = allArtData.filter(art => art.id == items[i])
            orderItems.push(...query)
        }
        setDataToShow(orderItems)
        setClicked(!clicked)
    }


    return (
        <>
            {orderItem !== null ? (
                <div className="row orderlist-div">
                    <div className="col-lg-5">
                        <div className="identifier-div">
                            <button onClick={() => handleOrderClick(uuid)}
                                className={clicked ? "id-btn active" : 'id-btn'}>
                                {uuid}
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        {clicked && (
                            <>
                                <div className="order-details-div">
                                    {dataToShow.map(art => (
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
                                        </div>
                                    ))}
                                    <p>Order status: <span>Processing...</span></p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

            ) : (
                <div className="no-orders">
                    <h5>You have no orders yet...</h5>
                </div>
            )}
        </>
    )
}

export default OrderList