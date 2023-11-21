import { useEffect } from "react";
import { Link } from "react-router-dom";
import badUrlImg from '../assets/images/badUrl.png'
import Navbar from "../components/Navbar";

const ErrorPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <div className="error-div">
                <div className="error-image-wrapper">
                    <img className="img-fluid" src={badUrlImg} alt="bad url" />
                </div>
                <h1>Unknown url pattern...</h1>
                <p>
                    Don't mess with the url. It might take you places unknown
                </p>
                <Link className="error-link" to="/shop">
                    Go Back To Shop
                </Link>
            </div>
        </>
    )
}

export default ErrorPage