import React from "react";
import "./style.css";
import { updateCard, addCard } from "../../redux/actions";
import { connect } from "react-redux";


const initialCardData = {
    title: "",
    status: "",
    description: ""
}
const Modal = ({ active, setActive, editCard, setEditCard, dispatch }) => {

    const { title, status, description, id } = editCard || { initialCardData };

    const onCancel = () => {
        setActive(false);
        setEditCard(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            cardId: id,
            title: formData.get("title"),
            status: formData.get("status"),
            description: formData.get("description")
        }
        if (editCard) {

            dispatch(updateCard(data));
        } else {

            dispatch(addCard(data))
        }
        onCancel();
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
                <textarea placeholder="Description" name="description" defaultValue={description} type="text" />
                <div className="buttons_wrapper">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div >
    )
}

export default connect()(Modal);