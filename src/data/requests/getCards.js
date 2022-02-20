function getCards({ token }) {
    return fetch(
        `https://radiant-temple-07706.herokuapp.com/cards`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }
    )
        .then(response => response.json())
        .catch(e => {
            console.log(e);
            return {};
        });
}

export default getCards;