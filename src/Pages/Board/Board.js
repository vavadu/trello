import React from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header/Header"
import Column from "../../components/Column";
import CardItem from "../../components/CardItem";
import './Board.css';
import useStatuses from "../../data/hooks/useStatuses";
import useCards from "../../data/hooks/useCards";

function Main() {

    const { data } = useStatuses();
    const { data: cardsData } = useCards();

    console.log(data, cardsData);

    return (
        <div className="Main">
            <Aside />
            <div className="Main-section__wrapper">
                <Header />
                <div className="Cards__wrapper">
                    {data.map((elem) => <Column item={elem} key={elem.value} title={elem.title} cards={cardsData.filter(card => card.status === elem.value)} />)}
                </div>
            </div>
        </div>
    );
}

export default Main;
