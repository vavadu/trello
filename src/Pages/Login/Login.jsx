import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from '../../components/Form/FormInput/FormInput';
import { connect } from "react-redux";


import { login } from '../../redux/actions';


function Login({ auth, dispatch }) {

    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        dispatch(login({
            login: formData.get("login"),
            password: formData.get("password")
        }));
    }

    return (

        <div className='container'>
            <h1 className="header">Sign in</h1>
            <Form onSubmit={sendInfo} buttonText='Sign in'>
                <FormInput inputName="login" />
                <FormInput inputName="password" />
            </Form>
            {auth.error ? <h4 className='login-error'>{auth.error}</h4> : ""}
            <Link className="register__link" to="/register"> Not registered yet? Sign up!</Link>
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({
    auth,
})

export default connect(mapStateToProps)(Login);