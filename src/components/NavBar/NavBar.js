import React from "react";
import Style from './NavBar.module.css';
import { Link } from 'react-router-dom'
import dropdown from './../../img/menu_dropdown.png'
const NavBar = () => {
    return (
        <div className={Style.navBar} id="navBar">
            <nav>
                <div>
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
                                    <Link to='/about'>
                                        About
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

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;