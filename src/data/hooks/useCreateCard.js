import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api';



function useCreateCard() {
    const queryClient = useQueryClient();
    const { mutate: createCard, isLoading } = useMutation(api.createCard, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return { createCard, isLoading };
}

export default useCreateCard;
