import './style.css';
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile-photo.png'
import useAuth from '../../data/hooks/useAuth';

function Aside() {
    const { logout } = useAuth();
    return (
        <div className="Aside">
            <img className="Logo" src={logo} alt="logo" />
            <div className="Profile">
                <img className="Profile__img" src={profile_img} alt="logo" />
                <p></p>
                <button type="button" className="logout" onClick={logout}>Logout</button>
            </div>

        </div>
    );
}

export default Aside;