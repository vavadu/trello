import { useQuery, useMutation, QueryClient } from "react-query";
import loginRequest from '../requests/login';
import registerRequest from '../requests/register';
import { setToken, getToken } from '../client';


const userQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
})

function useAuth() {
    const { mutate: mutateLogin, isLoading: isLoadingLogin } = useMutation(loginRequest, {
        onSuccess: (data) => {
            setToken(data.jwt);
            // TOTO Store user data to LocalStorage
            userQueryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });
    const { mutate: mutateRegister, isLoading: isLoadingRegister } = useMutation(registerRequest, {
        onSuccess: (data) => {
            setToken(data.jwt);
            // TOTO Store user data to LocalStorage
            userQueryClient.setQueryData('authUser', data.user);
            // TODO invalidate cache after jwt expiration
        }
    });

    const { data: authUser, isLoading: isLoadingUser } = useQuery('authUser', () => {
        const accessToken = getToken();
        // TOOD: get userData from localStorage
        // TODO checkt if accessToken is still valid.
        const valid = false;
        if (valid) {
            return {}; // TODO: user data
        } else {
            throw Error('Unauthorized');
        }
    });

    return { mutateLogin, isLoadingLogin, mutateRegister, isLoadingRegister, authUser, isLoadingUser, };
}

export default useAuth;


