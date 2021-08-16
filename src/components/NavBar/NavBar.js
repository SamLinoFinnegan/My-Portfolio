import React from "react";
import Style from './NavBar.module.css';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className={Style.navBar} id="navBar">
            <nav>
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
            </nav>
        </div>
    );
}

export default NavBar;