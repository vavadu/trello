import React from "react";
import Aside from "../Aside/Aside";
import Header from "../Header/Header"
import Card from "../Card/Card";
import './App.css';

function App() {
    return (
        <div className="App">
            <Aside />
            <div className="Main-section__wrapper">
                <Header />
                <div className="Cards__wrapper">
                    <Card title="To Do"/>
                    <Card title="In progress"/>
                    <Card title="Testing"/>
                    <Card title="Done"/>
                </div>
            </div>
        </div>
    );
}

export default App;
