import React, {useEffect, useState} from 'react';
import useAuth from "./data/hooks/useAuth";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from './Pages/Login/Login';
import { Register } from "./Pages/Register";
import Loader from "./components/Loader/Loader";
import Main from "./Pages/Board/Board";


function App() {
    const { authUser, isLoadingUser } = useAuth();
    let navigate = useNavigate();
    let [element, setElement] = useState(<></>);
    useEffect(() => {
        if (isLoadingUser) {
            setElement(<Loader/>)
        } else if (authUser) {
            setElement(<></>)
            navigate('board');
        } else {
            setElement(<></>)
            navigate('/')
        }
    }, [authUser, isLoadingUser]);


    return (
        <>
            {element}
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/board" element={<Main/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default App;