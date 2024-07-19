import { questionList } from "./data-from-google";

const questions = Array.from(questionList).map((question, questionIndex) => {
    return {
        questionId: questionIndex + 1,
        questionText: String(question)
    };
});

export {questions}