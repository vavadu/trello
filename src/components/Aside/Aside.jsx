import './Aside.css';
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile-photo.png'

function Aside() {
    return (
        <div className="Aside">
            <img className="Logo" src={logo} alt="logo"/>
            <div className="Profile">
                <img className="Profile__img" src={profile_img} alt="logo"/>
            </div>
        </div>
    );
}

export default Aside;