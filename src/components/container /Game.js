import React, { useState } from "react";
import ButtonsBar from "./ButtonsBar";
import Button from "../presentational/Button";
import ResultForm from "./ResultForm";
import { questions } from "../../data";
import { resultCodes } from "../../resultCodes";

export default function Game() {

    const [resolvedQuestions, setResolved] = useState([]);

    const [isOpenResult, openResult] = useState(false);
    const openCurrentResult = () => openResult(true);
    const closeCurrentResult = () => openResult(false);

    const getRandomId = (max) => Math.floor(Math.random() * max);

    const getRandomQuestion = () => {
        const resolvedQuestionsIds = resolvedQuestions.map((el) => el.questionId);
        const unresolvedQuestions = questions.filter(question => !resolvedQuestionsIds.includes(question.questionId));
        switch (unresolvedQuestions.length) {
            case 0: return {};
            default: return unresolvedQuestions[getRandomId(unresolvedQuestions.length - 1)];
        }
    };

    const [currentQuestion, changeQuestion] = useState(getRandomQuestion());
    const setNewQuestion = () => changeQuestion(getRandomQuestion());

    const setResult = (result) => {
        const questionResult = {
            questionId: currentQuestion.questionId,
            questionText: currentQuestion.questionText,
            result: result
        };

        setResolved([...resolvedQuestions, questionResult]);
        setNewQuestion();
    };

    return (
        <section className="get-start">
            <h2> <a name="game">Играть</a> </h2>
            <div className="question-block">
                <h3>Вопрос</h3>
                <p className="question-text" >{currentQuestion.questionText}</p>
                <h3>Ответ</h3>
                <ButtonsBar
                    buttonsList={resultCodes.filter((code) => code.isFinal === true)}
                    onClick={setResult}
                />
            </div>
            <div className="question-block-footer">
                <Button
                    name='Получить результат'
                    className="get-result-button"
                    onClick={openCurrentResult}
                />
            </div>
            {isOpenResult && <ResultForm
                resolvedQuestions={resolvedQuestions}
                onClick={closeCurrentResult}
            />}
        </section>
    );
}