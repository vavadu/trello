import deleteCardRequest from "../requests/deleteCard"
import { useMutation } from 'react-query';


function useDeleteCard() {
    const { mutate: deleteCard, isLoading } = useMutation(deleteCardRequest);
    return { deleteCard, isLoading };
}

export default useDeleteCard;