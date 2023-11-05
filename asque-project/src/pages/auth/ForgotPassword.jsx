import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // send email to server
        // server will generate code and send to user
        navigate("/login/recover-password")
    };
    return (
        <>
            <div className="forgot-password-div">
                <div className="forgot-password-quote">
                    <p className="quote">“Art enables us to find ourselves and lose ourselves at the same time.”</p>
                    <p className="author">- Thomas Merton</p>
                </div>
                <div className="forgot-password-block">
                    <h2>ASQUE</h2>
                    <p className="forgot">Forgot Password</p>
                    <div className="forgot-div">
                        <p className="forgot-description">Please enter your email below, we will send a 4 digit code to the email provided.</p>
                    </div>
                    <div className="forgot-form">
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="btn forgot-btn">Request Password reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword