import client from '../client';

function updateCard({ cardId, title, status, description }) {
    return client.put(
        `/cards/${cardId}`,
        {
            title: title,
            status: status,
            description: description
        },
    )
}

export default updateCard;