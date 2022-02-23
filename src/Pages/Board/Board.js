import React from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header/Header"
import Column from "../../components/Column";
import './Board.css';
import useStatuses from "../../data/hooks/useStatuses";
import useCards from "../../data/hooks/useCards";
import Modal from "../../components/Modal"

import { useState } from "react"

function Main() {
    const [modalActive, setModalActive] = useState(false);
    const [editCard, setEditCard] = useState(null);
    const { data } = useStatuses();
    const { data: cardsData } = useCards();

    return (
        <div className="Main">
            <Aside />
            <div className="Main-section__wrapper">
                <Header />

                <button className="task_btn" onClick={() => { setModalActive(true); setEditCard(null) }}>Create new task</button>

                <div className="Cards__wrapper">
                    {data.map((elem) => <Column id={elem.value} item={elem} setEditCard={(item) => { setEditCard(item); setModalActive(true) }} key={elem.value} title={elem.title} cards={cardsData.filter(card => card.status === elem.value)} />)}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} editCard={editCard} setEditCard={setEditCard} />
        </div>
    );
}

export default Main;
 // можем кнопку вынести в отдельный компонент вообще