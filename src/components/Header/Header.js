import React from "react";

import './header.scss';

import logo from 'assets/icones/logo.svg';

const Header = () => {
    return  <header>
                <div className="nav-container">
                        <div className="logo">
                            <img src={logo} alt="logo"></img>
                        </div>
                        <nav>
                            <ul className="nav-bar">
                                <li>Accueil</li>
                                <li>Prestations</li>
                                <li className="contact-button">Contact</li>
                            </ul>
                        </nav>
                </div>
                <div className="title-container">
                    <h1>Rubio Marlène</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, nisi imperdiet tincidunt lacinia, dui massa posuere arcu, eu varius sapien ligula eu nunc. Duis varius ligula nibh, id ornare leo varius eget. Sed sit amet nunc et augue pretium rutrum et quis odio. Duis mattis urna ex, eu feugiat felis ullamcorper at.</span>
                </div>
                
                
            </header>
};

export default Header;