import React from "react";
import CardItem from "./CardItem/CardItem";
import './Card.css';


function Card({title,}) {
    return (
        <div className="Card">
            <h2>{title}<div className='options_menu'></div></h2>
            <ul className="Card__list">
                <li className="Card__item"><CardItem /></li>
                <li className="Card__item"><CardItem /></li>
                <li className="Card__item"><CardItem /></li>
                <li className="Card__item"><CardItem /></li>
            </ul>
        </div>
    );
}

export default Card;