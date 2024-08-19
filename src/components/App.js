import Header from './sections/Header';
import Game from './game/Game';
import Footer from './sections/Footer';
import SectionText from './sections/SectionText';
import ToGameLink from './presentational/ToGameLink';
import Instruction from "./sections/Instruction";
import './App.css';

export default function App({ questions = [], resultCodes = [] }) {

    return (
        <>
            <Header />
            <main className='main-page'>
                <h1 className='visually-hidden'>
                    <a name='page' href='#page' className='content-title'>
                        Карточки для повторения материала по CSS, HTML и JS
                    </a>
                </h1>
                <SectionText
                    title={{ text: 'О проекте', contentName: 'about' }}
                    img={{ height: 450, url: 'img/img.png', alt: 'Игровой джойстик' }}
                    tagParams={{ class: 'about', directionMode: 'reverse' }}
                    blockquote={{text: 'Начинать всегда стоит с того, что сеет сомнение'}}
                >
                    <div>
                        <p className='paragraph-about'>
                            Это мог быть чат-бот в Telegram, но я начинающий frontend-разработчик
                            и мне нужна страничка для тренировок приобретённых умений и подготовки
                            к собеседованиям. На этой страничке собраны вопросы, ответы на которые
                            мне полезно прокручивать в голове.
                        </p>
                        <p className='paragraph-about'>
                            Напишите мне, если у вас есть
                            замечания, предложения или советы по поиску работы. Привтствуется
                            любая обратная связь.
                        </p>
                        <ToGameLink
                            className='about-section-link'
                        />
                    </div>
                </SectionText>
                <SectionText
                    title={{ text: 'Правила', contentName: 'rules' }}
                    img={{ height: 400, url: 'img/CFARACTER.png', alt: 'Игрок в VR-очках' }}
                    tagParams={{ class: 'rules', directionMode: 'forward' }}
                    blockquote={{ text: 'Многие путают свое воображение со своей памятью' }}
                >
                    <div>
                        <p>
                            Карточки для запоминания – это инструмент, помогающий учащимся
                            эффективно запоминать информацию и улучшать свои навыки. С их
                            помощью можно разбить учебный материал на удобные для запоминания
                            кусочки.
                        </p>
                        
                    </div>
                </SectionText>
                <Instruction />
                <Game
                    questions={questions}
                    resultCodes={resultCodes}
                />
            </main >
            <Footer />
        </>
    );
}