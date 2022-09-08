import React from "react";

import './header.scss';

import logo from 'assets/images/logo.png';

const Header = () => {
    return  <header>
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <div className="logo-text">
                        <div>BABY</div>
                        <span>Massage</span>
                    </div>
                </div>
                <nav>
                    <ul className="nav-bar">
                        <li>Accueil</li>
                        <li>Prestations</li>
                        <li className="contact-button">Contact</li>
                    </ul>
                </nav>
            </header>
};

export default Header;