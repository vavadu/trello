import React from "react";
import "./style.css";

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <form className="modal-content" onClick={event => event.stopPropagation()}>
                <input placeholder="title" />
                <input placeholder="status" />
                <textarea placeholder="description" />
                <button>Save</button>
                <button onClick={() => setActive(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default Modal;