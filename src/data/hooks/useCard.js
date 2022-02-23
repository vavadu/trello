import { api } from '../api';

import { useQuery } from 'react-query';


function useCard() {
    const { data, isLoading } = useQuery('card', api.getCard);
    return { data, isLoading }
}

export default useCard;