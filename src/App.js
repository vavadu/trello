import React from 'react';
import useAuth from "./data/hooks/useAuth";
import Login from './Pages/Login';
import Main from "./Main";


function App() {
    const { authUser, isLoadingUser } = useAuth();


    // Add some React loader to app
    // if (isLoadingUser) {
    //     return <Loader />;
    // }

    if (authUser == null) {
        return <Login />
    }

    return <Main />

}

export default App;