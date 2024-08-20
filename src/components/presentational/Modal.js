import React, { useEffect, useRef } from "react";
import CloseButton from "./CloseButton";
import './Modal.css';

export default function Modal({ data, title, onClick, classNameWindow }) {

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
                <CloseButton onClick={onClick} />
                <h3 className="modal-title">{title}</h3>
                {data}
            </div>
        </div>
    );
}

