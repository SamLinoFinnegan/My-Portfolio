import React from "react";
import Style from './Header.module.css';


const Header = (props) => {
    return (
        <div className={Style.container}>

            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;