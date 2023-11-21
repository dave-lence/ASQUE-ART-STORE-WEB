import './howitworks.css'
import wonderingImg from '../assets/images/wondering.png'

const HowItWorks = () => {
    return (
        <>
            <div className="container howitworks-div">
                <h3>How it works</h3>
                <div className="row align-items-end howitworks-row">
                    <div className="col-lg-6 procedure-div">
                        <div className="procedure-item">
                            <div className="number-circle">1</div>
                            <div className="title">
                                <h5>Register as a seller</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo tempora magni numquam id facilis.</p>
                            </div>
                        </div>
                        <div className="procedure-item">
                            <div className="number-circle">2</div>
                            <div className="title">
                                <h5>Register as a seller</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo tempora magni numquam id facilis.</p>
                            </div>
                        </div>
                        <div className="procedure-item">
                            <div className="number-circle">3</div>
                            <div className="title">
                                <h5>Register as a seller</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo tempora magni numquam id facilis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="howitworks-img-box workings-box">
                            <img src={wonderingImg} className='img-fluid' alt="people-wondering" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks