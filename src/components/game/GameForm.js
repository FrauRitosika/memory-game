import React from 'react';
import ButtonsBar from '../presentational/ButtonsBar';
import Button from '../presentational/Button';
import Title from '../presentational/Title';
import './GameForm.css';

export default function GameForm({ currentQuestionText, buttonsList, setResult, openCurrentResult }) {

    return (
        <div>
            <div className='game-title'>
                <Title
                    title='Играть'
                    contentName='game'
                    level={2}
                />
            </div>
            <div className='question-block'>
                <h3>Вопрос</h3>
                <p className='question-text' >{currentQuestionText}</p>
                <h3>Ответ</h3>
                <ButtonsBar
                    buttonsList={buttonsList}
                    onClick={setResult}
                />
            </div>
            <div className='question-block-footer'>
                <Button
                    name='Получить результат'
                    className='get-result-button'
                    onClick={openCurrentResult}
                />
            </div>
        </div>
    );
}