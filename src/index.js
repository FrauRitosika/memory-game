import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.js';
import { questions } from "./data.js";
import { resultCodes } from "./resultCodes.js";

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(
    <App
        questions={questions}
        resultCodes={resultCodes}
    />
);