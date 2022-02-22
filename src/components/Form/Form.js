import React from 'react';
import './Form.css';
import FormInput from "./FormInput/FormInput";


function Form({ submitFn, inputs, buttonText }) {
    return (
        <form onSubmit={submitFn} >
            {
                inputs.map(input => (<FormInput key={input} inputName={input} />))
            }
            <button>{buttonText}</button>
        </form>
    )
}

export default Form;