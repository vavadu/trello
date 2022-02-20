import createCardRequest from '../requests/createCard';
import { useMutation } from 'react-query';


function useCreateCard() {
    const { mutate: createCard, isLoading } = useMutation(createCardRequest);
    return { createCard, isLoading };
}

export default useCreateCard;
