import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import useAuth from '../../data/hooks/useAuth';

function Login() {
    const { mutateLogin, error } = useAuth();

    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutateLogin({ login: formData.get("login"), password: formData.get("password") });
    }
    //Мне кажется функцию можно написать как-то красивее или вообще вынести отсюда.Надо подумать

    return (

        <div className='container'>
            <h1 className="header">Sign in</h1>
            <Form submitFn={sendInfo} inputs={['login', 'password']} buttonText='Sign in' />
            {error ? <h4 className='login-error'>{error}</h4> : ""}
            <Link className="register__link" to="/register"> Not registered yet? Sign up!</Link>
        </div>
    )
}

export default Login;