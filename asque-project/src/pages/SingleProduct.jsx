import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { allArtData } from "../assets/data";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductReview from "../components/ProductReview";

const SingleProduct = () => {
    const { artSlug } = useParams();
    const navigate = useNavigate();
    const [artData, setArtData] = useState({})
    const [hearted, setHearted] = useState(false)
    let userIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))
    let relatedArts = [...allArtData].sort(() => (Math.random() - 0.5)).slice(0, 4)

    const toTitleCase = (str) => {
        return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        let singleData = allArtData.filter(art => art.slug == artSlug)
        if (singleData.length) {
            setArtData(singleData[0])
        } else {
            navigate('*')
        }
    }, [artSlug])

    // useEffect(() => {
    //     return
    // }, [artData])

    let { artist, category, id, description, dimension, keywords, image, name, slug, price } = artData

    if (category !== undefined) {
        category = toTitleCase(category)
    }
    if (keywords !== undefined) {
        let theWords = []
        let randomNumber = Math.floor(Math.random() * (3 - 2 + 1) + 2)
        // console.log(keywords.length)
        // console.log(randomNumber)
        if (!(randomNumber > keywords.length)) {
            for (let i = 0; i < randomNumber; i++) {
                theWords.push(keywords[i])
            }
            keywords = theWords
        }
    }

    const notify = (message, errorType) =>
        toast(message, {
            position: "top-right",
            autoClose: "3000",
            pauseOnHover: true,
            closeOnClick: true,
            type: errorType,
            theme: "colored",
        });

    const handleWishlistClick = (id) => {
        // console.log(id)
        if (userIsAuthenticated) {
            let theWishlist = JSON.parse(localStorage.getItem("wishlist"))
            if (theWishlist === null) {
                localStorage.setItem("wishlist", JSON.stringify([id]))
            } else {
                let newWishlist = [...theWishlist]
                if (!theWishlist.includes(id)) {
                    newWishlist.push(id)
                }
                localStorage.setItem("wishlist", JSON.stringify(newWishlist))
            }
            notify("Art has been added to your wishlist!", "success")
        } else {
            notify("Please log in to add art to your wishlist!", "info")
        }
    };

    const addToCart = (id) => {
        let theCart = JSON.parse(localStorage.getItem("asqueCart"))
        if (theCart === null) {
            localStorage.setItem("asqueCart", JSON.stringify([id]))
        } else {
            let newCart = [...theCart]
            if (!theCart.includes(id)) {
                newCart.push(id)
            }
            localStorage.setItem("asqueCart", JSON.stringify(newCart))
        }
        notify("Art has been added to your cart!", "success")
    }

    // console.log(typeof category)
    // // console.log(category.toUpperCase())
    // console.log(artist, category, id, image, name, slug, price)


    return (
        <>
            <Navbar />
            <div className="container single-art-container">
                <div className="row single-art-row">
                    <div className="col-lg-6">
                        <div className="single-art-wrapper">
                            <img src={image} alt={slug} className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>{name}</h3>
                        <p className="art-artist">{artist}</p>
                        {/* <div>
                            
                        </div> */}
                        <p className="art-price">${price}</p>
                        <p className="art-dimension">${dimension}</p>
                        {/* <p className="art-category">Category:
                            <span> {category}</span>
                        </p> */}
                        <p className="art-description">Description:
                            <span> {description}</span>
                        </p>
                        <p className="art-keywords">Keywords:
                            {keywords !== undefined && keywords.map(key => (
                                <span key={key}>{key}</span>
                            ))}
                        </p>
                        <hr />
                        <div className="single-cta">
                            <button
                                onClick={() => addToCart(id)}
                                className="cart-btn"
                            >
                                Add to Cart
                            </button>
                            {/* <button
                                onClick={() => handleWishlistClick(id)}
                                className="wishlist-btn"
                            >
                                Add to Wishlist
                            </button> */}
                            <i onClick={() => {
                                handleWishlistClick(id);
                                setHearted(true)
                            }} className={hearted ? "fa fa-heart hearted" : "fa fa-heart"}></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <h2 className="related-arts">People also viewed...</h2>
                <div className="row related-row">
                    {relatedArts.map(art => (
                        <div key={art.id} className="col-lg-3 col-md-4 col-sm-6 art-col">
                            <div className="art-block">
                                <div className="image-wrapper">
                                    <img src={art.image} alt={art.slug}
                                        className="img-fluid" />
                                    <div id="slide">
                                        <NavLink to={`/shop/art/${art.slug}`} className="btn">
                                            View Art
                                        </NavLink>
                                        <div className="utilities">
                                            <i
                                                onClick={() => addToCart(art.id)}
                                                className="fas fa-shopping-bag"
                                            ></i>
                                            <i
                                                onClick={() => handleWishlistClick(art.id)}
                                                className="fas fa-heart"
                                            ></i>
                                        </div>
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
                </div>
                <ProductReview />
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct