import client from '../client';

function login({ login, password }) {
    return client.post('/auth/local',
        {
            identifier: login,
            password: password,
        },
    );
}

export default login;


const App = () => {

    const { authUser, isLoadingUser } = useAuth();

    if (isLoadingUser) {
        return <Loader />;
    }

    if (authUser == null) {
        return <LoginRegister />
    }

    return <Main />

}

const LoginRegister = () => {

    const { mutateLogin, mutateRegister } = useAuth();

    return (
        <div>
            <form onSubmit={(event) => { mutateLogin({ login: 'lasdasdasdas', password: 'adasdas' }) }}
            </form>
        </div >
    );
}