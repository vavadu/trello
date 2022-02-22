import deleteCardRequest from "../requests/deleteCard"
import { useMutation, useQueryClient } from 'react-query';



function useDeleteCard() {
    const queryClient = useQueryClient();
    const { mutate: deleteCard, isLoading } = useMutation(deleteCardRequest, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return { deleteCard, isLoading };
}

export default useDeleteCard;