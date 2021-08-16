import React from "react";
import Header from './../Header/Header'
import Style from './Projects.module.css';
import movie from './../../img/MovieList.jpg';
import muscle from './../../img/MuscleCars.jpg';
import play from './../../img/PlayList.jpg';
import dash from './../../img/StudentDashBoard.jpg';
import todo from './../../img/TodoList.jpg'
import api from './../../img/Api.jpg'


const Projects = () => {
    return (
        <div className={Style.projects} id="projects">
            <div className={Style.mainText}>
                <Header title={'These are some of the projects ive done'} />
            </div>
            <div className={Style.container}>
                <div className={Style.images}>
                    <img className={Style.movieList} src={movie} alt="IMBD"></img>
                    <a href='https://angry-wing-f800c4.netlify.app'>
                        <h2 className={Style.text}>IMDB made with Vanila JavaScript</h2>
                    </a>
                </div>
                <div className={Style.images}>
                    <img className={Style.muscleCars} src={muscle} alt="Muscle car"></img>
                    <a href='https://friendly-banach-520c42.netlify.app'>
                        <h2 className={Style.text}>This was my first Website using just HTML and css</h2>
                    </a>
                </div>
                <div className={Style.images}>
                    <img className={Style.playList} src={play} alt="Play List"></img>
                    <a href='https://hopeful-swirles-5b4d2f.netlify.app'>
                        <h2 className={Style.text}>React playlist UI using Redux</h2>
                    </a>
                </div>
                <div className={Style.images}>
                    <img className={Style.dashBoard} src={dash} alt="Student DashBoard"></img>
                    <a href='https://competent-kowalevski-f9e3cb.netlify.app'>
                        <h2 className={Style.text}>UI/UX</h2>
                    </a>
                </div>
                <div className={Style.images}>
                    <img className={Style.todoList} src={todo} alt="Todo List"></img>
                    <a href='https://happy-villani-0e3ea1.netlify.app'>
                        <h2 className={Style.text}>Vanila JavaScript Todo list doing http requests</h2>
                    </a>
                </div>
                <div className={Style.images}>
                    <img className={Style.myApi} src={api} alt="GOF Api"></img>
                    <a href='https://gifted-swanson-6454ad.netlify.app'>
                        <h2 className={Style.text}>Fetching async data from an API</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;