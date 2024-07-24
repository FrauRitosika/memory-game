import React from "react";
import './Instruction.css';

export default function Instruction() {
    return (
        <div className="rules-text">
            <h3 className="subtitle">Как играть</h3>
            <ul>
                <li>
                    Переходим в раздел{" "}
                    <a className="link" href="#game">
                        Играть
                    </a>
                </li>
                <li>
                    Открывается первая карточка, в которой нужно изучить текст вопроса
                </li>
                <li>
                    Если ответ нам известен, его нужно сформулировать полными
                    предложениями и лучше проговорить вслух
                </li>
                <li>Отмечаем карточку в зависимости от ответа</li>
                <ul>
                    <li>«Знаю», если удалось сформулировать уверенный ответ.</li>
                    <li>
                        «Требуется повторение», если ответ в общих чертах известен, но к
                        настоящему собеседованию хотелось бы подтянуть знания по теме.
                    </li>
                    <li>
                        «Не знаю», если ответа вспомнить не удалось или в нем не было
                        уверенности
                    </li>
                </ul>
                <li>
                    Повторяем описанные выше действия пока не устанем. Когда это
                    произойдет, можно будет скачать файлик с вопросами, на которые игрок
                    ответил «Не знаю» или «Требуется повторение» с помощью кнопки
                    «Получить результаты»
                </li>
            </ul>
        </div>
    );
}