import React from "react";
import ToGameLink from "./ToGameLink";

export default function SectionAbout() {
    return (
        <section className="about">
            <div className="about-text-content">
                <h2>
                    <a name="about">О проекте</a>
                </h2>
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
                    <a className="link-to-send">Напишите мне</a>, если у вас есть
                    замечания, предложения или советы по поиску работы. Привтствуется
                    любая обратная связь.
                </p>
                <ToGameLink />
            </div>
            <img height={450} src="img/img.png" alt="Игровой джойстик" />
        </section>
    );
}