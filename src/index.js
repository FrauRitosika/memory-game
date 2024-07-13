import { questionList } from "./data-from-google.js";
import { StudyProgress } from "./study-progress.js";

import './App.css';

//start load
const progress = new StudyProgress(questionList);
let question = progress.getRandomQuestion();

const questionText = document.querySelector('.question-text');
const buttonResults = document.querySelector('.set-result');
const buttonGetResult = document.querySelector('.get-result-button');

questionText.textContent = question.questionText;

buttonResults.onclick = function(event) {
    const button = event.target.closest('button');

    if (!button) return;

    progress.setQuestionResultById(question.questionId, button.dataset.result);
    question = progress.getRandomQuestion();
    questionText.textContent = question.questionText;
};


buttonGetResult.onclick = function() {
    console.log(progress.getStudyResult());
};

for (let button of buttonResults.querySelectorAll('.button')) {
    button.disabled = false;
}