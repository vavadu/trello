import client from '../client';

function getCard({ cardId }) {
    return client.get(`/cards/${cardId}`);
}

export default getCard;