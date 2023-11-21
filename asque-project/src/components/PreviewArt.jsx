import './previewart.css'
import uploadImg from '../assets/images/hands.png'
import { useEffect, useState } from "react";

const PreviewArt = (props) => {
    const [showModal, setShowModal] = useState(false)

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

    const handlePublish = () => {
        console.log('art published...')
        setShowModal(true)
    }
    return (
        <>
            <div className="preview-div">
                <div className="go-back-div">
                    <i onClick={() => props.setActive("product-form")} className="fa fa-arrow-left"></i>
                    <p>Go back</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img className="uploaded-art img-fluid" src={uploadImg} alt="upload-visual" />
                    </div>

                    <div className="col-lg-6 art-description">
                        <h3>Hands of Nernia</h3>
                        <p className="price">$900</p>
                        <div className="dimension">40cm x 30cm</div>
                        <h6><b>Description:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id nihil iure ad est cumque odit! Maxime quia perferendis commodi.</h6>
                        <div className="art-info">
                            <p><b>Artist:</b> Alina Starkov</p>
                            <p><b>Availability:</b> Unlimited</p>
                        </div>
                        <button onClick={handlePublish}>Publish</button>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className={showModal ? "modalBackground" : "modalBackground hidden"}>
                    <div className="modal-container">
                        <div className="modal-body">
                            <i className="fa fa-check"></i>
                            <p>Product Uploaded Successfully</p>
                            <button onClick={() => { props.setActive("my-artworks"); setShowModal(false) }} className="done-btn">Done</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PreviewArt