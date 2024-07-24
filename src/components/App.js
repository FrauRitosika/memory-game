import Header from "./sections/Header";
import Game from "./game/Game";
import Footer from "./sections/Footer";
import SectionAbout from "./sections/SectionAbout";
import SectionInstruction from "./sections/SectionInstruction";
import './App.css';

export default function App({ questions = [], resultCodes = [] }) {

    return (
        <>
            <Header />
            <main className="main-page">
                <h1 className='visually-hidden'>
                    <a name='page' href='#page' className="content-title">
                        Карточки для повторения материала по CSS, HTML и JS
                    </a>
                </h1>
                <SectionAbout />
                <SectionInstruction />
                <Game
                    questions={questions}
                    resultCodes={resultCodes}
                />
            </main>
            <Footer />
        </>
    );
}