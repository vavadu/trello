import { useQuery } from 'react-query';
import { api } from '../api';



function useCards() {
    const { data, isLoading } = useQuery('cards', api.getCards);
    return { data: data ? data.data : [], isLoading }
}

export default useCards;
