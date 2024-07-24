import React, { useState } from "react";
import GameForm from "../game/GameForm";
import ResultForm from "../results/ResultForm";
import './Game.css'

const getRandomId = (max) => Math.floor(Math.random() * max);


export default function Game({questions=[], resultCodes=[]}) {

    const [resolvedQuestions, setResolved] = useState([]);

    const [isOpenResult, openResult] = useState(false);
    const openCurrentResult = () => openResult(true);
    const closeCurrentResult = () => openResult(false);

    const getRandomQuestion = (resolvedQuestions) => {
        const resolvedQuestionsIds = resolvedQuestions.map((el) => el.questionId);
        const unresolvedQuestions = questions.filter(question => !resolvedQuestionsIds.includes(question.questionId));
        switch (unresolvedQuestions.length) {
            case 0: return {};
            default: return unresolvedQuestions[getRandomId(unresolvedQuestions.length - 1)];
        }
    };
    const [currentQuestion, changeQuestion] = useState(getRandomQuestion(resolvedQuestions));
    const setNewQuestion = () => changeQuestion(getRandomQuestion(resolvedQuestions));


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
        <section className="get-start section">
            <GameForm
                currentQuestionText={currentQuestion.questionText}
                buttonsList={resultCodes.filter((code) => code.isFinal === true)}
                setResult={setResult}
                openCurrentResult={openCurrentResult}
            />
            {isOpenResult && <ResultForm
                resolvedQuestions={resolvedQuestions}
                onClick={closeCurrentResult}
            />}
        </section>
    );
}