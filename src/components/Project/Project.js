import React from "react";
import Style from './Project.module.css';





const Project = (props) =>{
    return (
        <div className={Style.images}>
            <img className={Style.movieList} src={props.img} alt={props.alt}></img>
            <a href={props.href}>
                <h2 className={Style.text}>{props.text}</h2>
            </a>
        </div>
    )
}

export default Project