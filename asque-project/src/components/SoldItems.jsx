import './solditems.css'
// import { carouselData } from "../assets/data";
import { useEffect, useRef, useState } from "react";

const SoldItems = (props) => {
    let carouselData = props.carouselData
    const modalRef = useRef();
    const containerRef = useRef();
    const [currentImg, setCurrentImg] = useState([])
    const [showModal, setShowModal] = useState(false)

    const closeModal = (e) => {
        if (modalRef.current === e.target || containerRef.current === e.target) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.style["overflow-y"] = "hidden";
        } else {
            document.body.style["overflow-y"] = "auto";
        }
    }, [showModal]);

    return (
        <>
            <div className="solditems-div">
                <div className="row sold-images">
                    {carouselData.map((art) => (
                        // <div key={img.id} onClick={() => {
                        //     setCurrentImg(img.image)
                        //     setShowModal(true)
                        // }} className="wrapper col-lg-3">
                        //     <div className="card">
                        //         <img src={img.image} alt="" className="w-100 img-fluid" />
                        //         <div className="card-body">
                        //             <h5 className="card-title">{img.name}</h5>
                        //             <p className="card-text">${img.price}</p>
                        //         </div>
                        //     </div>
                        // </div>
                        <div key={art.id}
                            className="col-lg-3 col-md-4 col-sm-6 art-col"
                            onClick={() => {
                                setCurrentImg(art.image);
                                setShowModal(true)
                            }}
                        >
                            <div className="art-block">
                                <div className="image-wrapper">
                                    <img src={art.image} alt={art.slug}
                                        className="img-fluid" />
                                    {/* <div id="slide">
                                        <NavLink to={`/shop/art/${art.slug}`} className="btn">
                                            View Art
                                        </NavLink>
                                    </div> */}
                                </div>
                                <div className="art-info">
                                    <p>{art.name}</p>
                                    <h6>${art.price}</h6>
                                </div>
                                {/* <NavLink
                                    to={`/shop/art/${art.slug}`}
                                    className="single-art-link"
                                >
                                    <div className="art-info">
                                        <p>{art.name}</p>
                                        <h6>${art.price}</h6>
                                    </div>
                                </NavLink> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div ref={containerRef} onClick={closeModal}
                    className={showModal ? "modalBackground" : "modalBackground hidden"}>
                    <div ref={modalRef} className="modal-container">
                        <div className="modal-body">
                            <img src={currentImg} alt="modal-visual" className="img-fluid" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SoldItems