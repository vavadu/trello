import useAuth from "../../data/hooks/useAuth"
import Form from "../../components/Form/Form";
import './index.css'
import React from "react";
import {Link} from "react-router-dom";

export function Register() {

    const sendInfo = (event) => {
        event.preventDefault();
       console.log('registration')
    }

    return (
        <div className='container'>
            <h1 className="header">Sign up</h1>
            <Form submitFn={sendInfo} inputs={['login', 'email', 'password']} buttonText='Sign up'/>
            <Link className="login__link" to="/login">Already have an account? Sign in!</Link>
        </div>

    )
}

