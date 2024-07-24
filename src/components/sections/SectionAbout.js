import React from "react";
import ToGameLink from "../presentational/ToGameLink";
import Title from "../presentational/Title";
import './SectionAbout.css';

export default function SectionAbout() {
    return (
        <section className="about section">
            <div className="about-text-content">
            <Title
                titleText='О проекте'
                contentName='about'
            />
                <blockquote className="tagline">
                    Начинать всегда стоит с того, что сеет сомнение
                </blockquote>
                <p>
                    Это мог быть чат-бот в Telegram, но я начинающий frontend-разработчик
                    и мне нужна страничка для тренировок приобретённых умений и подготовки
                    к собеседованиям. На этой страничке собраны вопросы, ответы на которые
                    мне полезно прокручивать в голове.
                </p>
                <p>
                    Напишите мне, если у вас есть
                    замечания, предложения или советы по поиску работы. Привтствуется
                    любая обратная связь.
                </p>
                <ToGameLink 
                className = 'about-section-link'
                />
            </div>
            <img height={450} src="img/img.png" alt="Игровой джойстик" />
        </section>
    );
}