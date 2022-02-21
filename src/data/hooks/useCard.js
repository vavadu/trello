import getCard from '../requests/getCard';
import { useQuery } from 'react-query';


function useCard() {
    const { data, isLoading } = useQuery('card', getCard);
    return { data, isLoading }
}

export default useCard;