import createCardRequest from '../requests/createCard';
import { useMutation, useQueryClient } from 'react-query';


function useCreateCard() {
    const queryClient = useQueryClient();
    const { mutate: createCard, isLoading } = useMutation(createCardRequest, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return { createCard, isLoading };
}

export default useCreateCard;
