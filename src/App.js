import React from 'react';
import useAuth from "./data/hooks/useAuth";
import Login from './Pages/Login/Login';
import {Register} from "./Pages/Register";
import Main from "./Pages/Board/Board";


function App() {
    const { authUser, isLoadingUser } = useAuth();

    return (
            authUser ? <Main /> : <Register />
        )

    // Add some React loader to app
    // if (isLoadingUser) {
    //     return <Loader />;
    // }



}

export default App;