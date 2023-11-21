import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import editProfileImg from '../assets/images/edit-profile.png'
import cameraImg from '../assets/images/camera-icon.png'
import Footer from "../components/Footer"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountryStateCity from "../components/CountryStateCity"


const EditBio = () => {
    const { pathname } = useLocation();
    let navigate = useNavigate()
    let profile = {
        name: "Alina Starkov",
        dob: "12/12/2020",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eum nobis, obcaecati ipsam nulla doloremque aperiam neque molestiae, accusantium deleniti fugit inventore dignissimos deserunt animi voluptatum quo repudiandae laborum rerum."
    }
    let userIsAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'))

    const notify = (message, errorType) =>
        toast(message, {
            position: "top-right",
            autoClose: "3000",
            pauseOnHover: true,
            closeOnClick: true,
            type: errorType,
            theme: "colored",
        });
    const handleEditBioSubmit = (e) => {
        e.preventDefault()
        notify("Your profile has been updated successfully", "info")
        navigate('/user/dashboard')
    }

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!userIsAuthenticated) {
            navigate('/login', { state: { previousPath: pathname } })
        }
    }, [userIsAuthenticated])

    return (
        <>
            <Navbar />
            <Hero orient={"center"} img={editProfileImg} editMode={true} />
            <div className="container editbio-div">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="wrapper-div">
                            <form onSubmit={handleEditBioSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" defaultValue={profile.name} required className="form-control" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editDescription">Bio</label>
                                    <textarea className="form-control" rows="5" defaultValue={profile.bio} id="editDescription" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Date of birth</label>
                                    <input type="text" placeholder="DD/MM/YYYY" defaultValue={profile.dob} required className="form-control" id="name" />
                                </div>
                                <button>Update Profile</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="wrapper-div">
                            <form>
                                <CountryStateCity />
                                <div className="form-group">
                                    <label htmlFor="address">Address *</label>
                                    <input placeholder="Address" type="text" required id="address" className="form-control" />
                                </div>
                                <div className="form-group phone">
                                    <label htmlFor="phone">Phone *</label>
                                    <input placeholder="Phone" type="text" required id="phone" className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default EditBio