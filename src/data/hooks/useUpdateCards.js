import updateCardRequest from '../requests/updateCard';
import { useMutation } from 'react-query';


function useUpdateCard() {
    const { mutate: updateCard, isLoading } = useMutation(updateCardRequest);
    return { updateCard, isLoading };
}
export default useUpdateCard;