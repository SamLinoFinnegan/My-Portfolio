import React from "react";
import Style from './About.module.css';
import me from './../../img/me.jpg';
import map from './../../img/map.png'



const About = () => {
    return (
        <div className={Style.about} id="about">
            <div className={Style.mainText}>
                <h1>A bit about me!</h1>
            </div>
            <div className={Style.container}>
                <div className={Style.text}>
                    <h2>Hi there, I'm Sam</h2>
                    <p>
                        A nomad and citizen of planet Earth.
                        <br />
                        Travel has been a big part of my life from an early age, my best memories were being on the road with my family and as I got older I continued to enjoy exploring, learning and discovering new places and cultures.
                        <br />
                        I love to travel, I feel like the world is my backyard and
                        there are always new and exciting things to learn and discover.
                        <br />
                        My life has taken me down many roads and allowed me to meet some amazing people who have helped mold me to the person I am today. I truly believe that self improvement of oneself and the world around us is why we are here. To be better today than yesterday, to do better.
                        <br />
                        I always try to be proactive, I believe that time is one of life's most precious gifts so I really don't like just doing nothing.
                      
                    </p>
                </div>
                <div className={Style.img} >
                    <img className={Style.myImg} src={me} alt='Me'></img>
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
        </div>
    );
}

export default About;