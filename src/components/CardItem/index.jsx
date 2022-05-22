import React from "react";
import './style.css';
import trash from "./trash.svg";
import edit from "./edit.svg";
import { normalizeDate } from "../../helpers/normalizeDate";
import { deleteCard } from "../../actions"
import { connect } from "react-redux"

function CardItem({ setEditCard, item, id, dispatch }) {

    function dragStartHandler(e) {
        e.dataTransfer.setData("id", item.id);
        e.dataTransfer.setData("title", item.title);
        e.dataTransfer.setData("description", item.description);
    }

    return (
        <div onDragStart={dragStartHandler} className="Item" draggable="true">
            <h3 className="Item__title">{item.title}</h3>
            <img src={edit} alt="edit" onClick={() => { setEditCard(item) }} className="card-edit card-icon" />
            <img src={trash} alt="delete" className="card-delete card-icon" onClick={() => { dispatch(deleteCard({ cardId: item.id })) }} />
            <p className="Item__descr">{item.description}</p>
            <p className="Item__date">{normalizeDate(item.published_at)}</p>
        </div>
    );
}

export default connect()(CardItem);