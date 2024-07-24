import React from "react";
import Instruction from "./Instruction";
import Title from "../presentational/Title";
import './SectionInstruction.css';

export default function SectionInstruction() {
    return (
        <section name="rules section" className="rules">
            <div className="rules-main-idea">
                <img
                    height={400}
                    src="img/CFARACTER.png"
                    alt="Игрок в VR-очках"
                />
                <div className="rules-pre-text">
                    <Title
                        titleText='Правила'
                        contentName='rules'
                    />
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