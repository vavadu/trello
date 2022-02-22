import useAuth from "../../data/hooks/useAuth"
import Form from "../../components/Form/Form";
import './index.css'
import React from "react";

export function Register() {

    const {mutateRegister} = useAuth();

    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutateRegister({ login: formData.get("login"), email: formData.get("email"), password: formData.get("password") });
    }

    return (
        <div className='container'>
            <h1 className="header">Sign up</h1>
            <Form submitFn={sendInfo} inputs={['login', 'email', 'password']} buttonText='Sign up'/>
            <a className='login__link' href='#'>Already have an account? Sign in!</a>
        </div>

    )
}

