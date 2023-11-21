import './ourproducts.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { allArtData } from '../assets/data'
import { NavLink } from "react-router-dom";


const OurProducts = () => {
    let newData = [...allArtData].sort(() => (Math.random() - 0.5)).slice(0, 8)
    let randomizedData = [...allArtData].sort(() => (Math.random() - 0.5)).slice(0, 8)
    const carouselOptions = {
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            425: {
                items: 2,
            },
            475: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 5,
            },
            1440: {
                items: 5,
            },
        },
    };
    return (
        <>
            <div className="container ourproducts-div">
                <h3>Our Products</h3>
                <div className="product-category">
                    <h5>Portraits</h5>
                    <NavLink to="/shop" state={{ categoryTitle: "Portrait" }}>See all <i className="fa fa-arrow-right"></i></NavLink>
                </div>
                <OwlCarousel className="products-carousel" {...carouselOptions}>
                    {newData.map((img) => (
                        <div key={img.id} className='image-box'>
                            <div className="image-wrapper">
                                <img src={img.image} className='img-fluid' alt={img.name} />
                            </div>
                            <div className="product-cta">
                                <div className="product-name">{img.name}</div>
                                <NavLink to={`/shop/art/${img.slug}`}>Shop now</NavLink>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>

                <div className="product-category">
                    <h5>Sculptures</h5>
                    <NavLink to="/shop" state={{ categoryTitle: "Sculpture" }}>See all <i className="fa fa-arrow-right"></i></NavLink>
                </div>
                <OwlCarousel className="products-carousel" {...carouselOptions}>
                    {randomizedData.map((img) => (
                        <div key={img.id} className='image-box'>
                            <div className="image-wrapper">
                                <img src={img.image} className='img-fluid' alt={img.name} />
                            </div>
                            <div className="product-cta">
                                <div className="product-name">{img.name}</div>
                                <NavLink to={`/shop/art/${img.slug}`}>Shop now</NavLink>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </>
    )
}

export default OurProducts