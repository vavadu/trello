import Form from "../../components/Form/Form";
import FormInput from '../../components/Form/FormInput/FormInput';
import './index.css'
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from '../../redux/actions';


function Register({ auth, dispatch }) {


    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        dispatch(register({
            login: formData.get("login"),
            email: formData.get("email"),
            password: formData.get("password")
        }));

    }

    return (
        <div className='container'>
            <h1 className="header">Sign up</h1>
            {auth.error ? <h4 className='register-error'>{auth.error}</h4> : ""}
            <Form onSubmit={sendInfo} buttonText='Sign up'>
                <FormInput inputName="email" />
                <FormInput inputName="login" />
                <FormInput inputName="password" />
            </Form>
            <Link className="login__link" to="/">Already have an account? Sign in!</Link>
        </div>

    )
}

const mapStateToProps = ({ auth }) => ({
    auth,
})

export default connect(mapStateToProps)(Register);