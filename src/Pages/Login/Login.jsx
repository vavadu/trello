import React from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import useAuth from '../../data/hooks/useAuth';
import FormInput from '../../components/Form/FormInput/FormInput';

function Login() {
    const { loginMutation } = useAuth();

    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        loginMutation.mutate({ login: formData.get("login"), password: formData.get("password") });
    }
    //Мне кажется функцию можно написать как-то красивее или вообще вынести отсюда.Надо подумать

    return (

        <div className='container'>
            <h1 className="header">Sign in</h1>
            <Form onSubmit={sendInfo} buttonText='Sign in'>
                <FormInput inputName="login" />
                <FormInput inputName="password" />
            </Form>
            {loginMutation.error ? <h4 className='login-error'>{loginMutation.error}</h4> : ""}
            <Link className="register__link" to="/register"> Not registered yet? Sign up!</Link>
        </div>
    )
}

export default Login;