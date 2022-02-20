function register({ login, email, password }) {
    return fetch(
        'https://radiant-temple-07706.herokuapp.com/auth/local/register',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: login,
                email: email,
                password: password,
            })
        },
    )
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {};
        });
}

export default register;