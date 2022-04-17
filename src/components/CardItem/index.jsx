import React from "react";
import './style.css';
import trash from "./trash.svg";
import edit from "./edit.svg";
import useDelete from "../../data/hooks/useDeleteCards";
import {normalizeDate} from "../../helpers/normalizeDate";

function CardItem({ setEditCard, item, id }) {

    const { deleteCard, isLoading } = useDelete();

    function dragStartHandler(e) {
        e.dataTransfer.setData("id", item.id);
        e.dataTransfer.setData("title", item.title);
        e.dataTransfer.setData("description", item.description );
    }

    return (
        <div onDragStart={(e) => dragStartHandler(e)} className="Item" draggable="true">
            <h3 className="Item__title">{item.title}</h3>
            <img src={edit} alt="edit" onClick={() => { setEditCard(item) }} className="card-edit card-icon" />
            <img src={trash} alt="delete" className="card-delete card-icon" onClick={() => { deleteCard({ cardId: item.id }) }} />
            <p className="Item__descr">{item.description}</p>
            <p className="Item__date">{normalizeDate(item.published_at)}</p>
        </div>
    );
}

export default CardItem;
