import React, {useEffect} from 'react';
import useAuth from "./data/hooks/useAuth";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from './Pages/Login/Login';
import { Register } from "./Pages/Register";
import Main from "./Pages/Board/Board";


function App() {
    const { authUser, isLoadingUser } = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        authUser ? navigate('/') : navigate('/login');
    }, [authUser])

    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>


        )



    // Add some React loader to app
    // if (isLoadingUser) {
    //     return <Loader />;
    // }



}

export default App;