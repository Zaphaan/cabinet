import React from "react";

// import style
import './prestation.scss';

//import svg
import bath from 'assets/icones/bath.svg';
import massage from 'assets/icones/massage.svg';
import kid from 'assets/icones/kid.svg';
import feet from 'assets/images/feet.png';

const Prestation = () => {

    return  <section className="prestation-main-container">
                    <div className="card">
                        <img src={bath} alt="Baignoire"></img>
                        <h3>Thalasso Bain Bébé</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat neque nunc, vel auctor velit accumsan in. Nulla ut nulla urna. Maecenas sed blandit neque. Vestibulum porttitor sollicitudin rhoncus. Morbi.
                        </span>
                    </div>
                    <div className="card">
                        <img src={massage} alt="Baignoire"></img>
                        <h3>Massage femme enceinte</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a felis ligula. Phasellus condimentum lacinia vehicula. Suspendisse quis libero ornare, egestas erat vitae, interdum lorem. Vestibulum ante ipsum primis in.
                        </span>
                    </div>
                    <div className="card">
                        <img src={kid} alt="Baignoire"></img>
                        <h3>Massage bébé</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat neque nunc, vel auctor velit accumsan in. Nulla ut nulla urna. Maecenas sed blandit neque. Vestibulum porttitor sollicitudin rhoncus. Morbi.
                        </span>
                    </div>
                    <div className="card">
                        <img src={feet} alt="Baignoire"></img>
                        <h3>Réflexologie bébé</h3>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed maximus est. Donec sit amet orci et elit tempus mollis. Pellentesque hendrerit purus eu metus accumsan mattis.
                        </span>
                    </div>
            </section>
};

export default Prestation;