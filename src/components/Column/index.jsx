import React, {useState, useEffect} from "react";
import CardItem from "../CardItem";
import './style.css';
import {getElementError} from "@testing-library/react";
import useUpdateCard from "../../data/hooks/useUpdateCard";


function Column({ setEditCard, item: { title, value }, cards }) {
    const { updateCard, isLoading : updateIsLoading } = useUpdateCard();

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("id");
        const title = e.dataTransfer.getData("title");
        const descr = e.dataTransfer.getData("description");

        updateCard({cardId: id, title: title,  status: value, description: descr});
    }

    return (
        <div className="Card drop-zone">
            <h2>{title}<div className='options_menu'></div></h2>
            <ul className="Card__list"
                onDrop={ (e) => dropHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
            >
                {cards.map((elem) => <CardItem key={elem.id} setEditCard={setEditCard} item={elem} />)}
            </ul>
        </div>
    );
}

export default Column;