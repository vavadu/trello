import React from "react";
import './CardItem.css';


function CardItem() {
    return (
        <div className="Item">
            <h3 className="Item__title">New Task<div className='options_menu'></div></h3>
            <p className="Item__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, voluptatum.</p>
            <p className="Item__date">Dec, 30 2019</p>
        </div>
    );
}

export default CardItem;