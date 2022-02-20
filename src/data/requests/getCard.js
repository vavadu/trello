function getCard({ token, cardID }) {
    return fetch(
        `https://radiant-temple-07706.herokuapp.com/cards/${cardID}`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    )
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {};
        });
}

export default getCard;