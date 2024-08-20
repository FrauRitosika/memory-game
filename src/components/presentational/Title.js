import React from "react";
import './Title.css';

export default function Title({ title, contentName, level }) {
    return (
        <h2 className={`title title-level-${level}`} id={contentName}>{title}</h2>
    );
}