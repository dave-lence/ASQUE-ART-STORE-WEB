import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const notify = (message, errorType) =>
    toast(message, {
      position: "top-right",
      autoClose: "3000",
      pauseOnHover: true,
      closeOnClick: true,
      type: errorType,
      theme: "colored",
    });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)
    if (email == "victordev@gmail.com" && password == 'abc') {
      // send details to server and log user in...or not
      localStorage.setItem("isAuthenticated", true);
      navigate('/user/dashboard')
    } else {
      notify("Couldn't log you in. Try again", "error");
    }
  };


  const toggleVisibility = (input_type) => {
    const passwordInput = document.querySelector("#InputPassword1")
    const eyeIcon = document.querySelector("#password-eye")
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    passwordInput.setAttribute('type', type)
    if (type == 'text') {
      eyeIcon.className = "fa fa-eye"
    } else {
      eyeIcon.className = "fa fa-eye-slash"
    }
  }
  return (
    <>
      <div className="login-div">
        <div className="login-quote">
          <p className="quote">“Art enables us to find ourselves and lose ourselves at the same time.”</p>
          <p className="author">- Thomas Merton</p>
        </div>
        <div className="login-block">
          <h2>ASQUE</h2>
          <p className="login">Welcome back!</p>
          <div className="login-div">
            <p className="login-description">Welcome back! Please enter your details</p>
          </div>
          <div className="login-form">
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className='reveal'>
                  <span onClick={toggleVisibility} className='eye-span'>
                    <i id="password-eye" className="fa fa-eye-slash"></i>
                  </span>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' id="InputPassword1" placeholder="Enter your Password" />
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
              <button type="submit" className="btn sign-in-btn">Log in</button>
              <button type="submit" className="btn google-btn">
                <i className="fab fa-google"></i>
                Sign in with google
              </button>
            </form>
            <div className="sign-in-option">
              Don’t have an account? {""}
              <NavLink to="/sign-up" className="log-in-cta">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

