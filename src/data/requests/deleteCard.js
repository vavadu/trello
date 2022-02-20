function deleteCard({ token, cardID }) {
    return fetch(
        `https://radiant-temple-07706.herokuapp.com/cards/${cardID}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        },
    )
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {};
        });
}

export default deleteCard;