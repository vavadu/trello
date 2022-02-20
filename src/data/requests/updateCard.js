function updateCard({ token, cardID, title, status, description }) {
    return fetch(
        `https://radiant-temple-07706.herokuapp.com/cards/${cardID}`,
        {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
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

export default updateCard;