import './style.css';
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile-photo.png'
import { logout } from '../../actions';
import { connect } from "react-redux";


function Aside({ dispatch }) {

    const useLogout = () => {
        dispatch(logout());
    }
    return (
        <div className="Aside">
            <img className="Logo" src={logo} alt="logo" />
            <div className="Profile">
                <img className="Profile__img" src={profile_img} alt="logo" />
                <p></p>
                <button type="button" className="logout" onClick={useLogout}>Logout</button>
            </div>

        </div>
    );
}

export default connect()(Aside);

