import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api';



function useDeleteCard() {
    const queryClient = useQueryClient();
    const { mutate: deleteCard, isLoading } = useMutation(api.deleteCard, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return { deleteCard, isLoading };
}

export default useDeleteCard;