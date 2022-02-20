import client from '../client';

function deleteCard({ cardId }) {
    return client.delete(`/cards/${cardId}`);
}

export default deleteCard;