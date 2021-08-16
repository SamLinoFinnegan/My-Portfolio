import React from "react";
import Style from './Home.module.css';
import code from './../../img/code.jpg';


const Home = () => {


    return (
        <div className={Style.home} id="home">
            <div className={Style.container}>
                <h1>"Hello World"</h1>
                <h2>Welcome to my Portfolio</h2>
            </div>
            <div className={Style.code}>
                <img src={code} alt="code"></img>
            </div>
        </div>
    )

}

export default Home;