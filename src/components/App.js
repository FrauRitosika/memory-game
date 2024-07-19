import React, { useState } from "react";

import Header from "./presentational/Header";
import Game from "./container /Game";
import Footer from "./presentational/Footer";
import SectionAbout from "./presentational/SectionAbout";
import SectionInstruction from "./presentational/SectionInstruction";

export default function App() {

    return (
        <>
            <Header />
            <main className="main-page">
                <h1 className="visually-hidden">
                    Карточки для повторения материала по CSS, HTML и JS
                </h1>
                <SectionAbout />
                <SectionInstruction />
                <Game />
            </main>
            <Footer />
        </>
    );
}