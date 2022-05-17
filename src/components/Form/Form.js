import React from 'react';
import './Form.css';
import FormInput from "./FormInput/FormInput";


function Form({ onSubmit, children, buttonText }) {
    return (
        <form onSubmit={onSubmit} >
            {children}
            <button type="submit">{buttonText}</button>
        </form>
    )
}

export default Form;