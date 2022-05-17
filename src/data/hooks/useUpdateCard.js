import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api';


function useUpdateCardMutation() {
    const queryClient = useQueryClient();
    const updateCardMutation = useMutation(api.updateCard, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return updateCardMutation;
}
export default useUpdateCardMutation;

