import React from "react";
import CardItem from "../CardItem";
import './style.css';


function Column({ item: { title }, cards }) {
    return (
        <div className="Card">
            <h2>{title}<div className='options_menu'></div></h2>
            <ul className="Card__list">
                {cards.map((elem) => <CardItem key={elem.value} item={elem} />)}
            </ul>
        </div>
    );
}

export default Column;