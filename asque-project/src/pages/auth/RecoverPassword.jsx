import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const RecoverPassword = () => {
    let navigate = useNavigate();
    const [code, setCode] = useState("")

    const goToNext = (field, nextFieldID) => {
        if (field !== " " && field.length == 1) {
            const nextInput = document.querySelector("#" + nextFieldID)
            nextInput.disabled = false
            nextInput.focus()
        }
        checkComplete()
    }
    const checkComplete = (e) => {
        if (code.length === 3) {
            const submitBtn = document.querySelector("#submitBtn")
            submitBtn.disabled = false
        }
    }

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
                        <form autoComplete="off" onSubmit={handleForgotPasswordSubmit}>
                            {/* <div className="pinBox">
                                <input onChange={(e) => setCode(e.target.value)} className="pinEntry" type="number" maxLength="4" />
                            </div> */}
                            <div className="pinbox">
                                <input type="number" maxLength="1" id="a" onChange={(e) => { e.target.value !== " " && setCode(code + e.target.value); goToNext(e.target.value, "b") }} />
                                <input type="number" disabled maxLength="1" id="b" onChange={(e) => { e.target.value !== " " && setCode(code + e.target.value); goToNext("b", "c") }} />
                                <input type="number" disabled maxLength="1" id="c" onChange={(e) => { e.target.value !== " " && setCode(code + e.target.value); goToNext("c", "d") }} />
                                <input type="number" disabled maxLength="1" id="d" onChange={(e) => { e.target.value !== " " && setCode(code + e.target.value); goToNext(" ", '') }} />
                            </div>
                            <button type="submit" disabled id="submitBtn" className="btn recover-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecoverPassword