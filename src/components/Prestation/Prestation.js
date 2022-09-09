import React from "react";

// import style
import './prestation.scss';

//import svgs
import pregnant from 'assets/images/pregnant.jpg';
import thalasso from 'assets/images/thalasso.jpg';
import reflexology from 'assets/images/reflexology.jpg';
import baby from 'assets/images/massage-baby.jpg';
import arrow from 'assets/icones/arrow.svg';

const Prestation = () => {

    return  <section className="prestation-main-container">
                    <div className="card">
                        <div className="img-container">
                            <img className="card-img" src={thalasso} alt="Baignoire"></img>
                        </div>
                        <h3>Thalasso Bain Bébé</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat neque nunc, vel auctor velit accumsan in.
                        </span>
                        <div className="button-container">
                            <a href='pwet'>En savoir plus</a>
                            <img src={arrow} alt='fléche'></img>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="img-container">
                            <img className="card-img" src={pregnant} alt="Baignoire"></img>    
                        </div>
                        <h3>Massage femme enceinte</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a felis ligula. Phasellus condimentum lacinia vehicula.
                        </span>
                        <div className="button-container">
                            <a href='pwet'>En savoir plus</a>
                            <img src={arrow} alt='fléche'></img>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="img-container">
                            <img className="card-img" src={baby} alt="Baignoire"></img>
                        </div>
                        <h3>Massage bébé</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat neque nunc, vel auctor velit accumsan in.
                        </span>
                        <div className="button-container">
                            <a href='pwet'>En savoir plus</a>
                            <img src={arrow} alt='fléche'></img>
                        </div> 
                    </div>
                    <div className="card">
                        <div className="img-container">
                            <img className="card-img" src={reflexology} alt='Réflexologie'></img>    
                        </div>
                        <h3>Réflexologie bébé</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat neque nunc, vel auctor velit accumsan in.
                        </span>
                        <div className="button-container">
                            <a href='pwet'>En savoir plus</a>
                            <img src={arrow} alt='fléche'></img>
                        </div>
                    </div>
            </section>
};

export default Prestation;