function createCard({ token, title, status, description }) {
    return fetch(
        "https://radiant-temple-07706.herokuapp.com/cards",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                status: status,
                description: description
            })
        },
    )
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {};
        });
}

export default createCard;