import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
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
            <div className="reset-div">
                <div className="reset-quote">
                    <p className="quote">“Art enables us to find ourselves and lose ourselves at the same time.”</p>
                    <p className="author">- Thomas Merton</p>
                </div>
                <div className="reset-password-block">
                    <h2>ASQUE</h2>
                    <p className="reset">Reset your password</p>
                    <div className="reset-div">
                        <p className="reset-description">Insert your new password</p>
                    </div>
                    <div className="reset-form">
                        <form onSubmit={handleSignUpSubmit}>
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
                                    <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" className="form-control" id="InputPassword2" placeholder="Enter your Password" />
                                </div>
                            </div>
                            <button type="submit" className="btn reset-btn">Change Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword