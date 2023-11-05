import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        navigate("/login/reset-password")
    };
    return (
        <>
            <div className="recover-password-div">
                <div className="recover-password-quote">
                    <p className="quote">“Art enables us to find ourselves and lose ourselves at the same time.”</p>
                    <p className="author">- Thomas Merton</p>
                </div>
                <div className="recover-password-block">
                    <h2>ASQUE</h2>
                    <p className="recover">Recover Password</p>
                    <div className="recover-div">
                        <p className="recover-description">Please enter the 4 digit sent to your email</p>
                    </div>
                    <div className="recover-form">
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="btn recover-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecoverPassword