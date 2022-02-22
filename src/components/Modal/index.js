import React from "react";
import "./style.css";
import useCreateCard from "../../data/hooks/useCreateCard";
import useUpdateCard from "../../data/hooks/useUpdateCard"

const Modal = ({ active, setActive, editCard, setEditCard }) => {
    const { createCard } = useCreateCard();
    const { updateCard } = useUpdateCard();
    const { title, status, description, id } = editCard || { title: "", status: "", description: "" };

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (editCard) {
            updateCard({ cardId: id, title: formData.get("title"), status: formData.get("status"), description: formData.get("description") });
        } else {
            createCard({ title: formData.get("title"), status: formData.get("status"), description: formData.get("description") });
        }
        setActive(false);
        setEditCard(null);
    };
    const onCancel = () => {
        setActive(false);
        setEditCard(null);
    };

    return active && (
        <div className={active ? "modal active" : "modal"} onClick={onCancel}>
            <form className="modal-content" onClick={event => event.stopPropagation()} onSubmit={onSubmit}>

                <input placeholder="title" name="title" defaultValue={title} />
                <input placeholder="status" name="status" defaultValue={status} />
                <textarea placeholder="description" name="description" defaultValue={description} type="text" />
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div >
    )
}

export default Modal;