import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from '../api';
import { setUserData, getUserData, removeUserData } from '../storage';


function useAuth() {
    const queryClient = useQueryClient();
    const loginMutation = useMutation(api.login, {
        onSuccess: ({ data }) => {
            setUserData(data);
            queryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });
    const registerMutation = useMutation(api.register, {
        onSuccess: ({ data }) => {
            setUserData(data);
            queryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });

    const authUserQuery = useQuery('authUser', () => {
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

    return { loginMutation, registerMutation, authUserQuery, logout };
}

export default useAuth;


