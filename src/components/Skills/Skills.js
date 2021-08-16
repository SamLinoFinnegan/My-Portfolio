import React from "react";
import Style from './Skills.module.css'
import Header from './../Header/Header'
import compSkills from './../../img/computerSkills.jpg'


const titleStyle = { fontWeight: 900, color: ' rgba(0, 212, 255, 1)', marginBottom: '4px' }

const backend = <ul>
    <li style={titleStyle}>Back-End</li>
    <li>Python - Flask - SQL - NodeJs</li>
</ul>

const frontend = <ul>
    <li style={titleStyle}>Front-End</li>
    <li>HTML - CSS/sass </li>
    <li>JavaScript Native - ReactJS - Redux</li>
</ul>

const other = <ul>
    <li style={titleStyle}>Other Skills</li>
    <li>Git - Jest - Fetch - JSON</li>
</ul>

const totalSkillls = [backend, frontend, other]


const Skills = () => {
    return (
        <div className={Style.skills} id="skills">
            <div className={Style.mainText}>
                <Header title={'What about the skills?'} />
            </div>
            <p>Im a life long learner and enjoy learning new stuf!
                Below are some programming languages, toolkits,
                frameworks and libraries that i've worked with and like.
                Some i control better then others.
            </p>
            <div className={Style.container}>
                <img className={Style.image} src={compSkills} alt="mySkills"></img>
                {totalSkillls.map(skill => {
                    return (
                        <div className={Style.list}>
                            {skill}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;