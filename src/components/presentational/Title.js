import React from "react";
import './Title.css';

export default function Title({ titleText, contentName, className }) {
    return (
        <h2 className={`${className}`}>
            <a name={contentName} href={`#${contentName}`} className="content-title">
                {titleText}
            </a>
        </h2>
    );
}