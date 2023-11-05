import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
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

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            notify("Both passwords don't match", "error");
        } else {
            // send details to server then go to login page
            navigate('/login')
        }
    };

    const toggleVisibility = (input_type) => {
        if (input_type == "password") {
            const passwordInput = document.querySelector("#InputPassword1")
            const eyeIcon = document.querySelector("#password-eye")
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
            passwordInput.setAttribute('type', type)
            if (type == 'text') {
                eyeIcon.className = "fa fa-eye"
            } else {
                eyeIcon.className = "fa fa-eye-slash"
            }
        } else {
            const passwordInput = document.querySelector("#InputPassword2")
            const eyeIcon = document.querySelector("#repeat-password-eye")
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
            passwordInput.setAttribute('type', type)
            if (type == 'text') {
                eyeIcon.className = "fa fa-eye"
            } else {
                eyeIcon.className = "fa fa-eye-slash"
            }
        }
    }

    return (
        <>
            <div className="sign-up-div">
                <div className="sign-up-quote">
                    <p className="quote">“Art is the lie that enables us to realize the truth.”</p>
                    <p className="author">- Pablo Picasso</p>
                </div>
                <div className="signup-block">
                    <h2>ASQUE</h2>
                    <p className="sign-up">Sign Up</p>
                    <div className="signup-div">
                        <p className="signup-description">Please enter your details to create an account</p>
                    </div>
                    <div className="signup-form">
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="InputName" placeholder="Enter your full name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <div className='reveal'>
                                    <span onClick={() => toggleVisibility('password')} className='eye-span'>
                                        <i id="password-eye" className="fa fa-eye-slash"></i>
                                    </span>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' id="InputPassword1" placeholder="Enter your Password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                <div className='reveal'>
                                    <span onClick={() => toggleVisibility("confirm-password")} className='eye-span'>
                                        <i id="repeat-password-eye" className="fa fa-eye-slash"></i>
                                    </span>
                                    <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" className="form-control" id="InputPassword2" placeholder="Re-enter Password" />
                                </div>
                            </div>
                            <button type="submit" className="btn sign-up-btn">Sign up</button>
                            <button type="submit" className="btn google-btn">
                                <i className="fab fa-google"></i>
                                Sign in with google
                            </button>
                        </form>
                        <div className="sign-in-option">
                            Already have an account? {""}
                            <NavLink to="/login">
                                Log in
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp