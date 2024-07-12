class StudyProgress {
    constructor(questionsList) {
        this.questions = Array.from(questionsList).map((question, questionIndex) => {
            return {
                questionId: questionIndex + 1,
                questionText: String(question),
                questionResult: 'NO_RESULT'
            };
        });
    }

    getRandomQuestion() {
        const unresolvedQuestion = this.questions.filter(question => question.questionResult === 'NO_RESULT');
        if (unresolvedQuestion.length == 0) return 'Больше вопросов нет <3';
        return unresolvedQuestion[this._getRandomId(unresolvedQuestion.length - 1)];
    }

    setQuestionResultById = (id, resultCode) => this.questions
        .filter(question => question.questionId === id)
        .map(question => question.questionResult = resultCode);

    getStudyProgress() {
        const progress = {};
        for (let result of this._resultCodes.codes) {
            progress[result.code] = this.questions.filter(question => question.questionResult == result.code).length;
        }
        return progress;
    }

    getStudyResult() {
        const finalCodes = this._resultCodes.codes.filter(result => result.isFinal === true).map(result => result.code);
        return this.questions.filter(question => finalCodes.includes(question.questionResult));
    }

    _resultCodes = {
        codes: [
            {
                code: 'NO_RESULT',
                description: 'Вопрос не пройден',
                isFinal: false
            },
            {
                code: 'SOLVED',
                description: 'Ответ на вопрос получен',
                isFinal: true
            },
            {
                code: 'SOLVED_UNCERTAINTLY',
                description: 'Ответ на вопрос получен частично',
                isFinal: true
            },
            {
                code: 'NOT_SOLVED',
                description: 'Ответ на вопрос не получен',
                isFinal: true
            }
        ]
    };

    _getRandomId = (max) => Math.floor(Math.random() * max);

}

export { StudyProgress };

