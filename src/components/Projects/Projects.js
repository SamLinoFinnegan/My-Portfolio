import React from "react";
import Project from "./../Project/Project";
import Style from './Projects.module.css';
import movie from './../../img/MovieList.jpg';
import muscle from './../../img/MuscleCars.jpg';
import play from './../../img/PlayList.jpg';
import dash from './../../img/StudentDashBoard.jpg';
import todo from './../../img/TodoList.jpg'
import api from './../../img/Api.jpg'
import SuperPy from './../../img/SuperPy.png'


const Projects = () => {
    


    
    const imbd_obj = {
        img: movie,
        alt: "IMBD",
        href: 'https://angry-wing-f800c4.netlify.app',
        text: "IMDB made with Vanila JavaScript"

    }
    const muscle_obj = {
        img: muscle,
        alt:"Muscle cars",
        href: 'https://friendly-banach-520c42.netlify.app',
        text: "This was my first Website using just HTML and css"
    }
    const play_obj = {
        img: play,
        alt:"Play List",
        href: 'https://hopeful-swirles-5b4d2f.netlify.app',
        text: "React playlist UI using Redux"
    }
    
    
    const dashboard_obj = {
        img: dash,
        alt: "Student DashBoard",
        href: 'https://competent-kowalevski-f9e3cb.netlify.app',
        text: "One page aplication Dashboard, with student database"
    }
    
    const todo_obj = {
        img: todo,
        alt: "Todo List", 
        href: 'https://happy-villani-0e3ea1.netlify.app',
        text: "JavaScript TODO list doing HTTP requests to local server"
    }
    const api_obj = {
        img: api,
        alt:"GOF Api",
        href: 'https://gifted-swanson-6454ad.netlify.app',
        text: "Fetching async data from an APIt"
    }
    
    const projects_obj = [imbd_obj,muscle_obj,play_obj,dashboard_obj,todo_obj,api_obj]
    let something = projects_obj.map(item => {
        return <Project img={item.img} alt={item.alt} href={item.href} text={item.text} />
    })


    return (
        <div className={Style.projects} id="projects">
            <div className={Style.mainText}>
                <h1>These are some of the projects ive done</h1>
                <div>
                    <h2>Front-End projects</h2>
                </div>
            </div>
            <div className={Style.container}>
                {something}
                
                <div className={Style.back_end_sorry_text}>
                    <h2>At the moment I am still completing my Back-end course, so i still havent had that many Back-end projects</h2>
                </div>
                <div className={Style.images}>
                    <div>
                        <h2>Back-End projects</h2>
                    </div>
                    <img className={Style.movieList} src={SuperPy} alt="SuperPy - Python App"></img>
                    <a href='https://github.com/SamLinoFinnegan/Back-end.git'>
                        <h2 className={Style.text}>SuperPy - Supermarket administration CLI app, with optional GUI</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;