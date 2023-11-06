import { NavLink } from "react-router-dom"
import './testlogin.css'

const TestLogin = () => {
    return (
        <div className="big-div">
            <div className="test-quote">
                <p className="quote">“Art enables us to find ourselves and lose ourselves at the same time.”</p>
                <p className="author">- Thomas Merton</p>
            </div>
            <div className="test-block">
                <h2>ASQUE</h2>
                <p className="test">Welcome back!</p>
                <div className="test-div">
                    <p className="test-description">Welcome back! Please enter your details</p>
                </div>
                <div className="test-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <div className='reveal'>
                                <span className='eye-span'>
                                    <i id="password-eye" className="fa fa-eye-slash"></i>
                                </span>
                                <input type="password" className='form-control' id="InputPassword1" placeholder="Enter your Password" />
                            </div>
                        </div>
                        <div className="remember-forgot-div">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="remember-me" />
                                <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                            </div>
                            <NavLink to="/login/forgot-password" className="forgot-password-cta">
                                Forgot password?
                            </NavLink>
                        </div>
                        <button type="submit" className="btn test-btn">Log in</button>
                        <button type="submit" className="btn test-google-btn">
                            <i className="fab fa-google"></i>
                            Sign in with google
                        </button>
                    </form>
                    <div className="test-option">
                        Don’t have an account? {""}
                        <NavLink to="/sign-up" className="test-cta">
                            Sign up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestLogin