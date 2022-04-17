import React from "react";
import "./style.css";
import useCreateCard from "../../data/hooks/useCreateCard";
import useUpdateCard from "../../data/hooks/useUpdateCard"

const initialCardData = {
    title: "",
    status: "",
    description: ""
};

const Modal = ({ active, setActive, editCard, setEditCard }) => {
    const { createCard } = useCreateCard();
    const { updateCard } = useUpdateCard();
    const { title, status, description, id } = editCard || initialCardData;

    const onCancel = () => {
        setActive(false);
        setEditCard(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (editCard) {
            updateCard({ cardId: id, title: formData.get("title"), status: formData.get("status"), description: formData.get("description") });
        } else {
            createCard({ title: formData.get("title"), status: formData.get("status"), description: formData.get("description") });
        }
        onCancel()
    };
    

    return active && (
        <div className={active ? "modal active" : "modal"} onClick={onCancel}>
            <form className="modal-content" onClick={event => event.stopPropagation()} onSubmit={onSubmit}>

                <input placeholder="Title" name="title" defaultValue={title} />
                <select placeholder="status" defaultValue={status} name="status">
                    <option value="to_do">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="testing">Testing</option>
                    <option value="done">Done</option>
                </select>
                <textarea placeholder="Description" name="description" defaultValue={description} type="text"/>
                <div className="buttons_wrapper">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div >
    )
}

export default Modal;
