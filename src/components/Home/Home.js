import React from "react";
import Style from './Home.module.css';
import robot from './../../img/me_robot.png'
import lenguages from './../../img/Python_mecanics.png'


const Home = () => {


    return (
        <div className={Style.home} id="home">
            <div className={Style.container}>
                <div className={Style.hello_world_container}>
                    <div className={Style.hello_world}>
                        <h2>"Hello World"</h2>
                        <h1>Welcome to my Portfolio</h1>
                    </div>
                </div>
                <div className={Style.content_container}>
                    <div className={Style.robot_img}>
                        <img src={robot} alt="robot"></img>
                    </div>
                    <div className={Style.intro_card_container}>
                        <div className={Style.intro_card}>
                            <div className={Style.intro_card_text}>
                                <p>Full-stack Developer</p>
                                <br></br>
                                <p>With passion for learning and developing AI / ML</p>
                            </div>
                            <div className={Style.intro_card_img}>
                                <img src={lenguages} alt="Python ML / AI"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Home;