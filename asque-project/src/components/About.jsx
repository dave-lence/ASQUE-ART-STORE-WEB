import phonesImg from '../assets/images/phones.png'

const About = () => {
    return (
        <div className="container about-div">
            <div className="col-lg-8 col-md-6 col-sm-6 order-2">
                <div className="about-us-text">
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deleniti eligendi! Minima aliquid, corporis porro consequuntur odit delectus adipisci necessitatibus natus. Voluptatibus sint debitis, sequi corrupti quam tempora veniam nemo minima exercitationem dolore ut quae animi labore veritatis delectus laboriosam, sunt odio accusamus soluta neque! Dignissimos exercitationem accusantium asperiores facilis praesentium ex id quasi? Accusantium mollitia numquam quidem beatae facere?</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 about-visual order-1 order-sm-1">
                <div className="about-img-box">
                    <img src={phonesImg} className='img-fluid' alt="phones" />
                </div>
            </div>
        </div>
    )
}

export default About