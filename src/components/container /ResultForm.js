import React from "react";
import QuestionResult from "../presentational/QuestionResult";
import Modul from "../presentational/Modal";

export default function ResultForm({ resolvedQuestions = [], onClick }) {

    const reviewOuestions = resolvedQuestions.filter((question) => question.result !== 'SOLVED');

    return (
        <Modul
            data={
                (() => {
                    switch (reviewOuestions.length) {
                        case 0: return (<p>{resolvedQuestions.length === 0 ? 'Вы еще не ответили ни на один вопрос' : 'Не выявили тем для повторения. Вы идеальны!'}</p>);
                        default: return (<ul className="question-results">
                            {reviewOuestions.map((question) => (
                                <li key={question.questionId}>
                                    <QuestionResult
                                        questionText={question.questionText}
                                        result={question.result}
                                    />
                                </li>
                            ))}
                        </ul>);
                    }
                })()
            }
            title='Вопросы к изучению'
            classNameWindow="form-result"
            onClick={onClick}
        />
    );
}
