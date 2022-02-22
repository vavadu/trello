import { authClient } from '../client';

function register({ login, email, password }) {
    return authClient.post('/auth/local/register',
        {
            username: login,
            email: email,
            password: password,
        },
    ).catch((registerError) => {
        return Promise.reject(registerError.response.data.data[0].messages[0].message);
    });
}

export default register;