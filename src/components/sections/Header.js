import React from "react";
import ToGameLink from "../presentational/ToGameLink";
import Link from "../presentational/Link";
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
                    className="img"
                />
            </a>
            <ul className="sections-navigation">
                <li className="section-nav-item">
                    <Link
                        path='#about'
                        text='О проекте'
                    />
                </li>
                <li className="section-nav-item">
                    <Link
                        path='#rules'
                        text='Правила'
                    />
                </li>
                <li className="section-nav-item">
                    <ToGameLink />
                </li>
            </ul>
        </nav>
    </header>);
}