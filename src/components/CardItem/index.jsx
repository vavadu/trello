import React from "react";
import './style.css';
import trash from "./trash.svg";
import edit from "./edit.svg";
import useDelete from "../../data/hooks/useDeleteCards";
import {normalizeDate} from "../../helpers/normalizeDate";

function CardItem({ setEditCard, item }) {

    const { deleteCard, isLoading } = useDelete();

    return (
        <div className="Item">
            <div className="card-header">
                <h3 className="Item__title">{item.title}</h3>
                <div className='options_menu'>
                    <img src={edit} alt="edit" onClick={() => { setEditCard(item) }} className="card-edit card-icon" />
                    <img src={trash} alt="delete" className="card-delete card-icon" onClick={() => { deleteCard({ cardId: item.id }) }} />
                </div>
            </div>

            <p className="Item__descr">{item.description}</p>
            <p className="Item__date">{normalizeDate(item.published_at)}</p>
        </div>
    );
}

export default CardItem;