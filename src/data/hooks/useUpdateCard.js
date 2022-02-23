import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api';


function useUpdateCard() {
    const queryClient = useQueryClient();
    const { mutate: updateCard, isLoading } = useMutation(api.updateCard, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return { updateCard, isLoading };
}
export default useUpdateCard;

