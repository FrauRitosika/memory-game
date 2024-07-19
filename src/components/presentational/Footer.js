import React from "react";

export default function Footer() {
    return (<footer className="main-header">
        <ul className="links-social">
            <li>
                <a
                    className="link-social"
                    href="https://github.com/FrauRitosika?tab=repositories"
                    target="_blank"
                >
                    <img
                        height={30}
                        src="img/github.svg"
                        alt="Логотип сервиса HeadHunter"
                    />
                </a>
            </li>
            <li>
                <a
                    className="link-social"
                    href="https://www.linkedin.com/in/margarita-buslakova-58731626a/"
                    target="_blank"
                >
                    <img height={30} src="img/linkedin.svg" alt="Логотип LinkedIn" />
                </a>
            </li>
        </ul>
    </footer>);
}