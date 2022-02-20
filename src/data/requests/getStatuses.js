function getStatuses({ token }) {
    return fetch(
        'https://radiant-temple-07706.herokuapp.com/statuses',
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

export default getStatuses;