import useAuth from "../../data/hooks/useAuth"
import Form from "../../components/Form/Form";
import './index.css'
import React from "react";
import { Link } from "react-router-dom";

export function Register() {

    const { mutateRegister, registerError } = useAuth();

    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutateRegister({ login: formData.get("login"), email: formData.get("email"), password: formData.get("password") });
    }

    return (
        <div className='container'>
            <h1 className="header">Sign up</h1>
            {registerError ? <h4 className='register-error'>{registerError}</h4> : ""}
            <Form submitFn={sendInfo} inputs={['login', 'email', 'password']} buttonText='Sign up' />
            <Link className="login__link" to="/">Already have an account? Sign in!</Link>
        </div>

    )
}

