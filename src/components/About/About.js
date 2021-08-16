import React from "react";
import Style from './About.module.css';
import Header from './../Header/Header.js';
import me from './../../img/me.jpg';




const About = () => {
    return (
        <div className={Style.about} id="about">
            <div className={Style.mainText}>
                <Header title={'A bit about me!'} />
            </div>
            <div className={Style.container}>
                <div className={Style.text}>
                    <h2>Hello , My name is Sam</h2>
                    <p>
                        World traveler/Bartender/Programmer.
                        I love to travel, I feel like the world is my backyard and
                        there are always new and exciting things to learn and discover.
                        <br />
                        I'm a strong follower of the idea of "trying to do better today, then what i did yesterday".
                        <br />
                        I'm always trying to better myself and learn how to overcome the challenges that life throws my way.
                        <br />

                        I always try to be proactive, I believe that time is one of life's most precious gifts so I really don't like just doing nothing.

                    </p>
                </div>
                <div className={Style.img} >
                    <img className={Style.myImg} src={me} alt='Me'></img>
                </div>
            </div>
        </div>
    );
}

export default About;