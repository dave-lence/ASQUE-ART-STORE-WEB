import './footer.css'
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footer = () => {
    let inputRef = useRef(null);
    const notify = (message, errorType) =>
        toast(message, {
            position: "top-right",
            autoClose: "3000",
            pauseOnHover: true,
            closeOnClick: true,
            type: errorType,
            theme: "colored",
        });
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        let email = inputRef.current.value;
        let validate = validateEmail(email);
        if (validate) {
            notify(
                "You have been successfully added to our newsletter list.",
                "success"
            );
            inputRef.current.value = "";
        } else {
            return notify("Please enter a proper email", "info");
        }
    };

    const validateEmail = (email) => {
        if (
            !/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9/-]+\.)+[A-Za-z]{2,4}$/i.test(email)
        ) {
            return false;
        }
        return true;
    };
    return (
        <>
            <div className="footer-div">
                <div className="row align-items-center">
                    <div className="col-lg-3 first">
                        <h2>ASQUE</h2>
                        <p>Art is for everybody.</p>
                    </div>
                    <div className="col-lg-2 second">
                        <p>Explore</p>
                        <p>Discover</p>
                        {/* <p>My Profile</p> */}
                        <p>Connect</p>
                        <p>Our Services</p>
                    </div>
                    <div className="col-lg-2 third">
                        <p>Learn</p>
                        <p>FAQ</p>
                        <p>Support</p>
                        <p>Connect</p>
                    </div>
                    <div className="col-lg-5 last">
                        <h5>Watch the space</h5>
                        <p>Subscribe to our news letter to stay in the loop and be the first to hear about new drops, events and other exciting announcements.</p>
                        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                            <input
                                ref={inputRef}
                                className="form-control"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer