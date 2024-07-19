import React from "react";

export default function Button({name, action, className='', isDisabled=false, onClick}) {

    return (
        <button
            className={`${className} button`}
            type="button"
            data-result={action}
            disabled={isDisabled}
            onClick={onClick}
        >
            <span>{name}</span>
        </button>
    );
}


