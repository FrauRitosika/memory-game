import React from "react";
import Button from "../presentational/Button";

export default function ButtonsBar({ buttonsList, isDisabled=false, onClick}) {
    return (
        <ul className="set-result">
            {buttonsList.map((el) => (
                <li key={el.code}>
                    <Button
                        name={el.actionName}
                        action={el.code}
                        isDisabled={isDisabled}
                        className="set-result-button"
                        onClick={() => onClick(el.code)}
                    />
                </li>
            ))}
        </ul>
    );
}