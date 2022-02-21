import React from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card";
import './Board.css';

function Main() {
    return (
        <div className="Main">
            <Aside />
            <div className="Main-section__wrapper">
                <Header />
                <div className="Cards__wrapper">
                    <Card title="To Do" />
                    <Card title="In progress" />
                    <Card title="Testing" />
                    <Card title="Done" />
                </div>
            </div>
        </div>
    );
}

export default Main;
