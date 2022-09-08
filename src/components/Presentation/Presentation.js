import React from "react";

// import style
import './presentation.scss';

// import images
import babyMassage from 'assets/images/baby-massage.jpg';

const Content = () => {
    return  <section className="presentation-main-container">
                <div className="left-container">
                    <div>Rubio</div>
                    <div>Marlène</div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, nisi imperdiet tincidunt lacinia, dui massa posuere arcu, eu varius sapien ligula eu nunc. Duis varius ligula nibh, id ornare leo varius eget. Sed sit amet nunc et augue pretium rutrum et quis odio. Duis mattis urna ex, eu feugiat felis ullamcorper at. In hac habitasse platea dictumst. Donec sagittis dolor at vestibulum ornare. Donec non ligula est. In hac habitasse platea dictumst. In blandit id purus id viverra.
                    </span> 
                </div>
                <div className="right-container">
                    <img src={babyMassage} alt="baby massage"></img>
                </div>
            </section>
};

export default Content;