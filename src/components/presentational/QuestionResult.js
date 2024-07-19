import React from "react";

export default function QuestionResult({questionText, result}) {
    return (
    <div className="question-result">
      <p className="question-result-text">{questionText}</p>
      <div className={`question-result-status ${result === 'NOT_SOLVED' ? 'result-status-unresolved' : 'result-status-reviewed'}`}>
        {result === 'NOT_SOLVED' ? 'Изучить' : 'Повторить'}
        </div>
    </div>
    );
}