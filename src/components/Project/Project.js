import React from "react";
import Style from './Project.module.css';





const Project = (props) =>{
    return (
        <div className={Style.images}>
            <a href={props.href}>
                <img className={Style.movieList} src={props.img} alt={props.alt}></img>
            </a>
                <h2 className={Style.text}>{props.text}</h2>
            
        </div>
    )
}

export default Project