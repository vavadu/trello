import { useQuery, useMutation, useQueryClient } from "react-query";
import loginRequest from '../requests/login';
import registerRequest from '../requests/register';
import { setToken, getToken, setUser, getUser } from '../client';


function useAuth() {
    const queryClient = useQueryClient();
    const { mutate: mutateLogin, isLoading: isLoadingLogin } = useMutation(loginRequest, {
        onSuccess: ({ data: { jwt, user } }) => {
            setUser(user);
            setToken(jwt);
            queryClient.setQueryData('authUser', user);
            // TODO invalidate cache after jwt expiration
        }
    });
    const { mutate: mutateRegister, isLoading: isLoadingRegister } = useMutation(registerRequest, {
        onSuccess: (data) => {
            setToken(data.jwt);
            // TOTO Store user data to LocalStorage
            queryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });

    const { data: authUser, isLoading: isLoadingUser } = useQuery('authUser', () => {
        const accessToken = getToken();
        const user = getUser();
        // TODO checkt if accessToken is still valid.
        if (user != null) {
            return user; // TODO: user data
        } else {
            return Promise.reject('Unauthorized');
        }
    });

    return { mutateLogin, isLoadingLogin, mutateRegister, isLoadingRegister, authUser, isLoadingUser, };
}

export default useAuth;


