import React, { useState } from "react";
import Style from './Skills.module.css'
import compSkills from './../../img/computerSkills.jpg'
import { FaGithub } from "react-icons/fa";
import { SiJest } from "react-icons/si"
import { FaPizzaSlice } from "react-icons/fa"
import { VscJson } from "react-icons/vsc"
import { AiFillHtml5 } from "react-icons/ai"
import { FaSass } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"
import { SiPython } from "react-icons/si"
import { SiFlask } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { FaNodeJs } from "react-icons/fa"



const Skills = () => {

    const titleStyle = { fontWeight: 900, color: ' rgba(0, 212, 255, 1)', marginBottom: '8px' }

    let [skill, upDateSkill] = useState()
    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    const backend =
        <div className={Style.list}>
            <ul>
                <li style={titleStyle}>Back-End</li>
                <div className={Style.footerIcon_container}>
                    <li>Python </li>
                    <SiPython className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>Flask </li>
                    <SiFlask className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>SQL </li>
                    <GrMysql className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>NodeJs </li>
                    <FaNodeJs className={Style.footerIcon} />
                </div>
            </ul>
        </div>

    const frontend =
        <div className={Style.list}>
            <ul>
                <li style={titleStyle}>Front-End</li>
                <div className={Style.footerIcon_container}>
                    <li>HTML </li>
                    <AiFillHtml5 className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>JavaScript Native </li>
                    <SiJavascript className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>CSS/sass </li>
                    <FaSass className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>ReactJS </li>
                    <FaReact className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>Redux </li>
                    <SiRedux className={Style.footerIcon} />
                </div>
            </ul>
        </div>

    const other =
        <div className={Style.list}>
            <ul>

                <li style={titleStyle}>Other Skills</li>
                <div className={Style.footerIcon_container}>
                    <li>Git  </li>
                    <FaGithub className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>Jest  </li>
                    <SiJest className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>Fetch and APIs </li>
                    <FaPizzaSlice className={Style.footerIcon} />
                </div>
                <div className={Style.footerIcon_container}>
                    <li>JSON  </li>
                    <VscJson className={Style.footerIcon} />
                </div>
            </ul>
        </div>


    const putSkill = (event) => {
        let answer = event.target.innerText;
        if (answer === "BackEnd") {
            upDateSkill(backend)
        } else if (answer === "FrontEnd") {
            upDateSkill(frontend)
        } else if (answer === "Other") {
            upDateSkill(other)
        }
    }
    let languages = ""
    if(toggle){
        languages = 
        <div className={Style.language_container}>
            <ul className={Style.language}>
                <li><p>English</p></li>
                <li><p>Portuguese</p></li>
                <li><p>Spanish</p></li>
                <li><p>Dutch</p></li>
            </ul>

        </div>

    }else{
        languages = ""
    }
    return (
        <div className={Style.skills} id="skills">
            <div className={Style.mainText}>
                <h1>What about the skills?</h1>
            </div>
            <div className={Style.mainText_container}>

                <p>Im a life long learner and enjoy learning new stuf!
                    Below are some programming languages, toolkits,
                    frameworks and libraries that i've worked with and like.
                    Some i control better then others.
                </p>
            </div>
            <div className={Style.container}>
                <img className={Style.image} src={compSkills} alt="people_aorund_computer"></img>
                <div className={Style.button_container}>
                    <div>
                        <button onClick={putSkill}>BackEnd</button>
                    </div>
                    <div>
                        <button onClick={putSkill}>FrontEnd</button>
                    </div>
                    <div>
                        <button onClick={putSkill}>Other</button>
                    </div>
                </div>
                <div className={Style.list_container}>
                    {skill}
                </div>
            </div>
            <div className={Style.mainText}>
                <h1>How about human languages</h1>
            </div>
            <div className={Style.ToggleSwitch_container}>
                
                <div onClick={triggerToggle} className={Style.ToggleSwitch}>
                    <div className={toggle ? Style.knob_active : Style.knob} />
                
                </div>
                <div>
                    {languages}
                </div>
            </div>
        </div>
        
        
            
           
        
    );
}

export default Skills;