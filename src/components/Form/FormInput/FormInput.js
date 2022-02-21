import React from 'react';
import  './FormInput.css';


function FormInput({inputName}) {

    return (
        <>
            <label htmlFor={inputName}>{inputName.charAt(0).toUpperCase() + inputName.slice(1)}</label>
            <input name={inputName} />
        </>
    )

}

export default FormInput;