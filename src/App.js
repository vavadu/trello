import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from "./Pages/Register";
import Loader from "./components/Loader/Loader";
import Main from "./Pages/Board/Board";
import { connect } from "react-redux";

import './App.css'


function App({ auth }) {
    if (auth.loading) {
        return <Loader />;
    }

    if (!auth.user) {
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
const mapStateToProps = ({ auth }) => ({
    auth,
})
export default connect(mapStateToProps)(App);