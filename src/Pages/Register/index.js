import useAuth from "../../data/hooks/useAuth"
import Form from "../../components/Form/Form";
import './index.css'
import React from "react";

export function Register() {

    const sendInfo = (event) => {
        event.preventDefault();
       console.log('registration')
    }

    return (
        <div className='container'>
            <h1 className="header">Sign up</h1>
            <Form submitFn={sendInfo} inputs={['login', 'email', 'password']} buttonText='Sign up'/>
            <a className='login__link' href='#'>Already have an account? Sign in!</a>
        </div>

    )
}

