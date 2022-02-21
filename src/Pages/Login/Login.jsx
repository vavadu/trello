import React from 'react';
import  './Login.css'
import Form from "../../components/Form/Form";
import useAuth from '../../data/hooks/useAuth';

function Login() {
    const { mutateLogin } = useAuth();

    const sendInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        mutateLogin({ login: formData.get("login"), password: formData.get("password") })
    }
    //Мне кажется функцию можно написать как-то красивее или вообще вынести отсюда.Надо подумать

    return (
        <div className='container'>
            <h1 className="header">Sign in</h1>
            <Form submitFn={sendInfo} inputs={['login', 'password']} buttonText='Sign in'/>
            <a className='register__link' href='#'>Not registered yet? Sign up!</a>
        </div>

    )
}

export default Login;