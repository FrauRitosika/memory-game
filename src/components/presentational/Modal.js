import React, { useEffect, useRef } from "react";
import CloseButton from "./CloseButton";

export default function Modul({ data, title, onClick, classNameWindow = 'form-result' }) {

    const modalRef = useRef();
    useEffect(() => {
        function handleClick(event) {
            if (!modalRef.current.contains(event.target)) {
                onClick();
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);

    }, [onClick]);

    return (
        <div className="modal-container">
            <div ref={modalRef} className={`modal-data ${classNameWindow}`}>
                <CloseButton className='close-button-result' onClick={onClick} />
                <h2>{title}</h2>
                <div className="scroll-container">
                    {data}
                </div>
            </div>
        </div>
    );
}

