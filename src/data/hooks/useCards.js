import getCards from '../requests/getCards';
import { useQuery } from 'react-query';


function useCards() {
    const { data, isLoading } = useQuery('cards', getCards);
    return { data: data ? data.data : [], isLoading }
}

export default useCards;
