import React from "react";

import './Loader.css';

function Loader() {
    return (
        <div className="spinner">
            <div className="blob top"></div>
            <div className="blob bottom"></div>
            <div className="blob left"></div>
            <div className="blob move-blob"></div>
        </div>
    );
}

export default Loader;