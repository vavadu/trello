import client from '../client';

function getCards() {
    return client.get(`/cards`);
}

export default getCards;