import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "../assets/images/contact-us.png"


const Contact = () => {
  const formRef = useRef();
  // const modalRef = useRef();
  // const containerRef = useRef();
  const [showModal, setShowModal] = useState(false)
  const [sendButtonClicked, setSendButtonClicked] = useState(false);
  const notify = (message, errorType) =>
    toast(message, {
      position: "top-right",
      autoClose: "3000",
      pauseOnHover: true,
      closeOnClick: true,
      type: errorType,
      theme: "colored",
    });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style["overflow-y"] = "hidden";
    } else {
      document.body.style["overflow-y"] = "auto";
    }
    return () => {
      document.body.style["overflow-y"] = "auto";
    }
  }, [showModal]);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log('form submitted...')
    setSendButtonClicked(true);
    const data = new FormData(e.target);
    let name = data.get("name");
    let email = data.get("email");
    let message = data.get("message");
    let validate = validateInput(name, email, message);
    if (validate) {
      setOpenModal(true);
      setSendButtonClicked(false);
    } else {
      notify("Email format is incorrect", "info")
      setSendButtonClicked(false);
    }
  }

  const validateInput = (name, email) => {
    if (
      name.length === 0 ||
      !/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9/-]+\.)+[A-Za-z]{2,4}$/i.test(email)
    ) {
      return false;
    }
    return true;
  };


  return (
    <>
      <Navbar />
      <div className="container contact-container">
        <div className="row first-row">
          <div className="col-md-7 first-col">
            <img src={contactImg} className="img-fluid" alt="contact-us" />
          </div>
          <div className="col-md-4">
            <div className="single-info-container">
              <div className="each-info">
                <i className="fa fa-phone"></i>
                <span>+234 567 8901</span>
              </div>
              <div className="each-info">
                <i className="fa fa-envelope"></i>
                <span>
                  <a href="mailto:asquestore@gmail.com">asquestore@gmail.com</a>
                </span>
              </div>
              <div className="each-info">
                <i className="fa fa-map-marker-alt"></i>
                <span>somewhere in a country, some state, some place</span>
              </div>
            </div>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="name"
                required className="form-control"
                placeholder="Your Name"
              />
              <input type="email" name="email"
                required className="form-control"
                placeholder="Your Email"
              />
              <textarea className="form-control"
                name="message" id="message" rows="7"
                required placeholder="Your message..."
              ></textarea>
              <button
                disabled={sendButtonClicked}
                type="submit"
                className="btn"
              // onClick={() => setSendButtonClicked(true)}
              >
                {sendButtonClicked ? "Sending..." : "Send Message"}
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>

        {showModal && (
          <div className={showModal ? "modalBackground" : "modalBackground hidden"}>
            <div className="modal-container">
              <div className="modal-body">
                <i className="fa fa-check"></i>
                <p>Message sent!</p>
                <span>Thank you for reaching out to us. You will receive a response pretty soon. Thank you.</span>
                <button onClick={() => { setShowModal(false) }} className="done-btn">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Contact