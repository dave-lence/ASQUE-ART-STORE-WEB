import './landingpage.css'
import landingpageImg from '../assets/images/landing-art.png'
import salesImg from '../assets/images/sales-icon.png'
import peopleImg from '../assets/images/people-icon.png'
import profileImg from '../assets/images/profile-icon.png'
import starImg from '../assets/images/star-review-icon.png'
import { NavLink } from "react-router-dom"

const LandingPage = () => {
    return (
        <section className="landing-section">
            <div className="img-box">
                <img className="img-fluid" src={landingpageImg} alt="landing-page-visual" />
            </div>
            <div className="landing-text">
                <h1>Find your ARTS a new home!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat dolor totam accusantium voluptate optio obcaecati similique dolores laborum repellat?</p>
                <NavLink className="shop-now-btn" to="/shop">
                    Shop now
                </NavLink>
            </div>
            <div className="container">
                <div className="row">
                    <div className="landing-info">
                        <div className="col-md-3 col-lg-3 info-item">
                            <div className="info-img-box">
                                <img src={starImg} className="img-fluid" alt="review-icon" />
                            </div>
                            <p>4.2/5.0 Rating</p>
                        </div>
                        <div className="col-md-3 col-lg-3 info-item">
                            <div className="info-img-box">
                                <img src={peopleImg} className="img-fluid" alt="people-icon" />
                            </div>
                            <p>7 million Customers</p>
                        </div>
                        <div className="col-md-3 col-lg-3 info-item">
                            <div className="info-img-box">
                                <img src={profileImg} className="img-fluid" alt="profile-icon" />
                            </div>
                            <p>6,000+ Vendors</p>
                        </div>
                        <div className="col-md-3 col-lg-3 info-item">
                            <div className="info-img-box">
                                <img src={salesImg} className="img-fluid" alt="sales-icon" />
                            </div>
                            <p>59 million sales</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage