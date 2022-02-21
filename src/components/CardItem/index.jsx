import React from "react";
import './style.css';


function CardItem({ item: { title, description, published_at } }) {

    return (
        <div className="Item">
            <h3 className="Item__title">{title}<div className='options_menu'></div></h3>
            <p className="Item__descr">{description}</p>
            <p className="Item__date">{published_at}</p>
        </div>
    );
}

export default CardItem;