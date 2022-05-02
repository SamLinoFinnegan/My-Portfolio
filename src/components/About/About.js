import React from "react";
import Style from './About.module.css';
import Header from './../Header/Header.js';
import me from './../../img/me.jpg';
import map from './../../img/map.png'



const About = () => {
    return (
        <div className={Style.about} id="about">
            <div className={Style.mainText}>
                <Header title={'A bit about me!'} />
            </div>
            <div className={Style.container}>
                <div className={Style.text}>
                    <h2>Hi there, I'm Sam</h2>
                    <p>
                        A true nomad and citizen of planet Earth.
                        <br />
                        To tell a bit about myself.
                        Since i was young, my life has always been on the road.
                        Traveling around to different cities and countries was part of our daly lives, and when i got older i guess i kept the same traveler spirit, to a point that im always excited to go visit and learn about a new country and culture.
                        <br />
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
            <div className={Style.container_bottom}>
                <div className={Style.container_bottom_text}>
                    <h2>The map bellow will show a few of the places that ive visited or lived in during the years</h2>
                </div>
                <div className={Style.container_bottom_img}>
                    <img src={map} alt="world map"></img>
                </div>
                <div className={Style.container_bottom_countries}>
                    <p>
                        Mexico City,
                        Morelia,
                        Para,
                        Ceara,
                        Pernambuco,
                        Minas Gerais,
                        Sao Paulo,
                        Rio de Janeiro,
                        Brasilia,
                        Casa Blanca,
                        Lisboa,
                        Algarve,
                        Fatima,
                        Viseu,
                        Porto,
                        Braga,
                        Guimaraes,
                        Povoa de Varzim,
                        Amsterdam,
                        Venlo,
                        Den Helder,
                        Den Haag,
                        Tesle,
                        Barcelona,
                        Madrid,
                        Valencia,
                        Luton,
                        London,
                        Dublin,
                        Oslo,
                        Lillestrøm,
                        Västerbotten,
                        Munich,
                        Frankfurt,
                        Hamburg,
                        Maryland,
                        Washington,
                        Illinois,
                        Florida,
                        Atlanta,
                        New York,
                        Texas
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;