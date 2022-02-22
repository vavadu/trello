import React from "react";
import "./style.css";
import useCreateCard from "../../data/hooks/useCreateCard"

const Modal = ({ active, setActive }) => {
    const { createCard } = useCreateCard();
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <form className="modal-content" onClick={event => event.stopPropagation()}
                onSubmit={(event) => {
                    event.preventDefault();
                    const formData = new FormData(event.target);
                    createCard({ title: formData.get("title"), status: formData.get("status"), description: formData.get("description") })
                }}>

                <input placeholder="title" name="title" />
                <input placeholder="status" name="status" />
                <textarea placeholder="description" name="description" />
                <button onClick={() => setActive(false)}>Save</button>
                <button onClick={() => setActive(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default Modal;