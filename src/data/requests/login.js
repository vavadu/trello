function login({ login, userPassword }) {
    return fetch(
        "https://radiant-temple-07706.herokuapp.com/auth/local",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                identifier: login,
                password: userPassword,
            })
        },
    )
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {};
        });
}

export default login;