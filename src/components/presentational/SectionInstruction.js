import React from "react";
import Instruction from "./Instruction";

export default function SectionInstruction() {
    return (
        <section name="rules" className="rules">
            <div className="rules-main-idea">
                <img
                    height={400}
                    src="img/CFARACTER.png"
                    alt="Игрок в VR-очках"
                />
                <div className="rules-pre-text">
                    <h2>
                        <a name="rules">Правила</a>
                    </h2>
                    <blockquote className="tagline">
                        Многие путают свое воображение со своей памятью
                    </blockquote>
                    <p>
                        Карточки для запоминания – это инструмент, помогающий учащимся
                        эффективно запоминать информацию и улучшать свои навыки. С их
                        помощью можно разбить учебный материал на удобные для запоминания
                        кусочки.
                    </p>
                </div>
            </div>
            <Instruction />
        </section>
    );
}