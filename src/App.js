import React from 'react';
import useAuth from "./data/hooks/useAuth";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login/Login';
import { Register } from "./Pages/Register";
import Loader from "./components/Loader/Loader";
import Main from "./Pages/Board/Board";
import './App.css'


function App() {
    const { authUserQuery } = useAuth();

    if (authUserQuery.isLoading) {
        return <Loader />;
    }

    if (!authUserQuery.data) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        );
    }


    return (
        <Routes>
            <Route path="/board" element={<Main />} />
            <Route
                path="*"
                element={<Navigate to="/board" />}
            />
        </Routes>
    );
}

export default App;