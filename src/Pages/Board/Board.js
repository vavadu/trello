import React from "react";
import Aside from "../../components/Aside";
import Header from "../../components/Header/Header"
import Column from "../../components/Column";
import './Board.css';
import Modal from "../../components/Modal";
import { getCards, getStatuses } from "../../actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";


function Main({ statuses, cards, dispatch }) {
    const [modalActive, setModalActive] = useState(false);
    const [editCard, setEditCard] = useState(null);

    useEffect(() => {
        dispatch(getCards())
        dispatch(getStatuses())
    }, []);



    return (
        <div className="Main">
            <Aside />
            <div className="Main-section__wrapper">
                <Header />

                <button className="task_btn" onClick={() => { setModalActive(true); setEditCard(null) }}>Create new task</button>

                <div className="Cards__wrapper">
                    {statuses.statuses.map((elem) => <Column id={elem.value} item={elem} setEditCard={(item) => { setEditCard(item); setModalActive(true) }} key={elem.value} title={elem.title} cards={cards.cards.filter(card => card.status === elem.value)} />)}
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive} editCard={editCard} setEditCard={setEditCard} />
        </div>
    );
}

const mapStateToProps = ({ statuses, cards }) => ({
    statuses,
    cards
})
export default connect(mapStateToProps)(Main);
