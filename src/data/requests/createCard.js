import client from '../client';

function createCard({ title, status, description }) {
    return client.post('/cards',
        {
            title: title,
            status: status,
            description: description
        },
    );
}

export default createCard;