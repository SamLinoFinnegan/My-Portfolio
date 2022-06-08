import React from "react";
import Style from './NavBar.module.css';
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { GrFacebook } from "react-icons/gr";
import dropdown from './../../img/menu_dropdown.png'
const NavBar = () => {
    return (
        <div >
            <nav className={Style.navBar} id="navBar">
                
                <div className={Style.nav_container} >
                    <div className={Style.dropdown_icon}>
                        <span className={Style.navBar_hamburger_icon}>
                            <img src={dropdown} alt="hamburger_icon"></img>
                        </span>
                        <div className={Style.dropdown_content}>
                            <ul>
                                <li>
                                    <Link to='/home'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/skills'>
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/projects'>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/about'>
                                        About
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className={Style.social_media_icons}>
                        <ul>
                            <li> <a href="https://github.com/SamLinoFinnegan"><FaGithub className={Style.Icon} /></a></li>
                            <li> <a href="https://www.linkedin.com/in/samuel-lino-b11944ab/"> <ImLinkedin className={Style.Icon} /></a></li>
                            <li> <a href="mailto: samuel.a.lino.sl@gmail.com"><SiGmail className={Style.Icon} /></a></li>
                            <li> <a href="https://www.facebook.com/samuel.lino.3745/"><GrFacebook className={Style.Icon} /></a></li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;