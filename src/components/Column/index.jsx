import React from "react";
import CardItem from "../CardItem";
import './style.css';
import { connect } from "react-redux";
import { updateCard } from "../../actions";


function Column({ setEditCard, item, cards, dispatch }) {

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e) {
        e.preventDefault();

        const data = {
            cardId: e.dataTransfer.getData("id"),
            title: e.dataTransfer.getData("title"),
            status: item.value,
            description: e.dataTransfer.getData("description")
        }
        dispatch(updateCard(data))
    }

    return (
        <div className="Card drop-zone">
            <h2>{item.title}<div className='options_menu'></div></h2>
            <ul className="Card__list"
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
            >
                {cards.map((card) => <CardItem key={card.id} setEditCard={setEditCard} item={card} />)}
            </ul>
        </div>
    );
}

export default connect()(Column);