import { NavLink } from "react-router-dom"
import { allArtData } from "../assets/data"
import './wishlist.css'


const Wishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist"))
    let wishItems = []
    if (wishlist !== null) {
        for (let i = 0; i < wishlist.length; i++) {
            let query = allArtData.filter(art => art.id == wishlist[i])
            wishItems.push(...query)
        }
    }

    return (
        <div className="row">
            {wishItems.length ? (
                <>
                    {wishItems.map(art => (
                        <div key={art.id} className="col-lg-3 col-md-4 col-sm-6 art-col">
                            <div className="art-block">
                                <div className="image-wrapper">
                                    <img src={art.image} alt={art.slug}
                                        className="img-fluid" />
                                    <div id="slide">
                                        <NavLink to={`/shop/art/${art.slug}`} className="btn">
                                            View Art
                                        </NavLink>
                                    </div>
                                </div>
                                <NavLink
                                    to={`/shop/art/${art.slug}`}
                                    className="single-art-link"
                                >
                                    <div className="art-info">
                                        <p>{art.name}</p>
                                        <h6>${art.price}</h6>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="container no-wishlist">
                    <h5>You have no art in your wishlist</h5>
                </div>
            )}
        </div>
    )
}

export default Wishlist