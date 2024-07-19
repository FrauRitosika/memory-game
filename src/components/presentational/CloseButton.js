import React from "react";

export default function CloseButton({className, onClick}) {

    return (
        <button
            className={`close-button ${className}`}
            type="button"
            onClick={onClick}
        >
        </button>
    );
}