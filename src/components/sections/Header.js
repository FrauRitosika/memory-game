import React from "react";
import ToGameLink from "../presentational/ToGameLink";
import './Header.css';

export default function Header() {
    return (<header className="main-header">
        <nav className="main-navigation">
            <a href="#page">
                <img
                    height={60}
                    href=""
                    src="img/book-opened-svgrepo-com.svg"
                    alt="Логотип"
                />
            </a>
            <ul className="sections-navigation">
                <li className="section-nav-item">
                    <a className="link" href="#about">
                        О проекте
                    </a>
                </li>
                <li className="section-nav-item">
                    <a className="link" href="#rules">
                        Правила
                    </a>
                </li>
                <li className="section-nav-item">
                    <ToGameLink />
                </li>
            </ul>
        </nav>
    </header>);
}