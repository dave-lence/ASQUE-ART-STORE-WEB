import './hero.css'
import profilePic from '../assets/images/vendor1.jpg'
import cameraIcon from '../assets/images/camera-icon.png'
import editHeroImg from '../assets/images/camera-add.png'
import editProfileImg from '../assets/images/camera-white.png'


const Hero = (params) => {
    let editMode = params.editMode
    let backgroundImg = `url(${params.img})`
    let sectionStyle = {
        backgroundImage: backgroundImg,
        backgroundPosition: params.orient,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative"
    };
    return (
        <>
            <div className="container hero-div" style={sectionStyle}>
                <div className="profile-img-box mb-2">
                    <img src={profilePic} alt="profile-visual" className="img-fluid" />
                </div>
                {editMode && (
                    <div className="hero-icon-wrapper">
                        <img className="hero-camera-icon" src={editHeroImg} alt="hero-camera-icon" />
                        <input type="file" name="heroFile" id="heroFile" />
                    </div>
                )}
                {editMode && (
                    <div className="profile-icon-wrapper">
                        <img className="edit-profile-icon" src={editProfileImg} alt="edit-profile-icon" />
                        <input type="file" name="profileFile" id="profileFile" />
                    </div>
                )}
                {/* <img className="camera-icon" src={cameraIcon} alt="camera-icon" /> */}
            </div>
        </>
    )
}

export default Hero