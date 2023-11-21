import './myartworks.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { carouselData } from "../assets/data";


const MyArtworks = (props) => {
    let carouselData = props.arts
    let randomizedData = props.sculpture
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
        <div className="myartworks-div">
            <h6>Arts</h6>
            <OwlCarousel className="products-carousel" {...carouselOptions}>
                {carouselData.map((img) => (
                    <div key={img.id} className='image-box'>
                        <div className="image-wrapper">
                            <img src={img.image} className='img-fluid' alt={img.name} />
                        </div>
                        <div className="product-cta">
                            <div className="product-name">{img.name}</div>
                            <p>${img.price}</p>
                        </div>
                    </div>
                ))}
            </OwlCarousel>

            <h6>Sculpture</h6>
            <OwlCarousel className="products-carousel" {...carouselOptions}>
                {randomizedData.map((img) => (
                    <div key={img.id} className='image-box'>
                        <div className="image-wrapper">
                            <img src={img.image} className='img-fluid' alt={img.name} />
                        </div>
                        <div className="product-cta">
                            <div className="product-name">{img.name}</div>
                            <p>${img.price}</p>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    )
}

export default MyArtworks