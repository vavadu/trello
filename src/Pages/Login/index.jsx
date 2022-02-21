import React from 'react';
import useAuth from '../../data/hooks/useAuth';

function Login() {
    const { mutateLogin } = useAuth();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            mutateLogin({ login: formData.get("login"), password: formData.get("password") })
        }}>
            <label>
                <input name="login" placeholder="Login" />
            </label>
            <label>
                <input name="password" type="password" placeholder="Password" />
            </label>
            <button>Login</button>
        </form>
    )
}

export default Login;