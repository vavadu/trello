import React from "react";
import './style.css';
import trash from "./trash.svg";
import edit from "./edit.svg";
import useDelete from "../../data/hooks/useDeleteCards";

function CardItem({ item: { id, title, description, published_at } }) {

    const { deleteCard, isLoading } = useDelete();

    return (
        <div className="Item">
            <div className="card-header">
                <h3 className="Item__title">{title}</h3>
                <div className='options_menu'>
                    <img src={edit} alt="edit" className="card-edit card-icon" />
                    <img src={trash} alt="delete" className="card-delete card-icon" onClick={() => { deleteCard({ cardId: id }) }} />
                </div>
            </div>

            <p className="Item__descr">{description}</p>
            <p className="Item__date">{published_at}</p>
        </div>
    );
}

export default CardItem;