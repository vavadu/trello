import { useQuery, useMutation, useQueryClient } from "react-query";
import loginRequest from '../requests/login';
import registerRequest from '../requests/register';
import { setToken, getToken, setUser, getUser, removeToken, removeUser } from '../client';


function useAuth() {
    const queryClient = useQueryClient();
    const { mutate: mutateLogin, isLoading: isLoadingLogin, error } = useMutation(loginRequest, {
        onSuccess: ({ data: { jwt, user } }) => {
            setUser(user);
            setToken(jwt);
            queryClient.setQueryData('authUser', user);
            // TODO invalidate cache after jwt expiration
        }
    });
    const { mutate: mutateRegister, isLoading: isLoadingRegister, error: registerError } = useMutation(registerRequest, {
        onSuccess: ({ data: { jwt, user } }) => {
            setUser(user);
            setToken(jwt);
            // TOTO Store user data to LocalStorage
            queryClient.setQueryData('authUser', user);
            // TODO invalidate cache after jwt expiration
        }
    });

    const { data: authUser, isLoading: isLoadingUser } = useQuery('authUser', () => {
        const accessToken = getToken();
        const user = getUser();
        // TODO checkt if accessToken is still valid.
        return user;
    }, { retry: false });

    const logout = () => {
        localStorage.clear();
        queryClient.invalidateQueries('authUser');
    }

    return { mutateLogin, isLoadingLogin, error, mutateRegister, isLoadingRegister, registerError, authUser, isLoadingUser, logout };
}

export default useAuth;


