import client from '../client';

function getStatuses() {
    return client.get(`/statuses`);
}

export default getStatuses;