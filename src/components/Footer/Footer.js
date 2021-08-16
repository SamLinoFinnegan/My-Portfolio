import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import Style from "./Footer.module.css";




const Footer = () => {
    return (
        <div className={Style.footer} id="footer">
            <div className={Style.footerContainer}>
                <a
                    target="blanc"
                    href="https://github.com/SamLinoFinnegan"
                    className={Style.footer - Style.item - Style.wrap}
                >
                    {" "}
                    <FaGithub className={Style.footerIcon} />{" "}
                    <p>GitHub</p>{" "}
                </a>

                <a
                    target="blanc"
                    href="https://www.linkedin.com/in/samuel-lino-b11944ab/"
                    className={Style.footer - Style.item - Style.wrap}
                >
                    {" "}
                    <ImLinkedin className={Style.footerIcon} />
                    <p>LinkedIn</p>
                </a>
                <a
                    target="blanc"
                    href="mailto: samuel.a.lino.sl@gmail.com"
                    className={Style.footer - Style.item - Style.wrap}
                >
                    {" "}
                    <SiGmail className={Style.footerIcon} />
                    <p>Email</p>
                </a>
                <a
                    target="blanc"
                    href="https://www.facebook.com/samuel.lino.3745/"
                    className={Style.footer - Style.item - Style.wrap}
                >
                    {" "}
                    <GrFacebook className={Style.footerIcon} />{" "}
                    <p>Facebook</p>{" "}
                </a>
            </div>

            <p className={Style.naw}>
                {" "}
                Samuel L. Finnegan
                <FaCopyright className={Style.footerIcon} />
                2021 All Rights Reserved
            </p>
        </div>
    )
}
export default Footer