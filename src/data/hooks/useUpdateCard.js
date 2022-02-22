import updateCardRequest from '../requests/updateCard';
import { useMutation, useQueryClient } from 'react-query';


function useUpdateCard() {
    const queryClient = useQueryClient();
    const { mutate: updateCard, isLoading } = useMutation(updateCardRequest, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return { updateCard, isLoading };
}
export default useUpdateCard;

