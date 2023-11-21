import './productreview.css'
import vendor1 from '../assets/images/vendor1.jpg'
import vendor2 from '../assets/images/vendor2.jpg'
import vendor3 from '../assets/images/vendor3.jpg'

const ProductReview = () => {
    return (
        <>
            <div className="container review-div">
                <h3>What our Vendors say</h3>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="vendor-img-box mb-2">
                            <img src={vendor1} alt="vendor-1" className="img-fluid" />
                        </div>
                        <p className="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis.</p>
                        <p className="vendor-name">Arteta</p>
                        <div>
                            {"abced".split("").map(star => (
                                <i key={star} className="fa fa-star"></i>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="vendor-img-box mb-2">
                            <img src={vendor2} alt="vendor-1" className="img-fluid" />
                        </div>
                        <p className="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis.</p>
                        <p className="vendor-name">Abigail</p>
                        <div>
                            {"abced".split("").map(star => (
                                <i key={star} className="fa fa-star"></i>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="vendor-img-box mb-2">
                            <img src={vendor3} alt="vendor-1" className="img-fluid" />
                        </div>
                        <p className="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis.</p>
                        <p className="vendor-name">John</p>
                        <div>
                            {"abced".split("").map(star => (
                                <i key={star} className="fa fa-star"></i>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductReview