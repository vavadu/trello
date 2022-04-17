import { useMutation, useQueryClient } from 'react-query';
import { api } from '../api';


export function useUpdateCardMutation() {
    const queryClient = useQueryClient();
    const updateCardMutation = useMutation(api.updateCard, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('cards');
        }
    });
    return updateCardMutation;
}
