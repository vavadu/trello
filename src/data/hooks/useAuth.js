import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from '../api';
import { setUserData, getUserData, removeUserData } from '../storage';


function useAuth() {
    const queryClient = useQueryClient();
    const { mutate: mutateLogin, isLoading: isLoadingLogin, error } = useMutation(api.login, {
        onSuccess: ({ data }) => {
            setUserData(data);
            queryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });
    const { mutate: mutateRegister, isLoading: isLoadingRegister, error: registerError } = useMutation(api.register, {
        onSuccess: (data) => {
            setUserData(data);
            queryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });

    const { data: authUser, isLoading: isLoadingUser } = useQuery('authUser', () => {
        const userData = getUserData();
        // TODO checkt if accessToken is still valid.
        if (userData) {
            return userData.user;
        }
        return null;
    }, { retry: false });

    const logout = () => {
        removeUserData();
        queryClient.invalidateQueries('authUser');
    }

    return { mutateLogin, isLoadingLogin, error, mutateRegister, isLoadingRegister, registerError, authUser, isLoadingUser, logout };
}

export default useAuth;


