import React from "react";
import '../cabinet.css'
import nav1 from '../img/nav1.png'
import nav2 from "../img/nav2.png"
import nav3 from '../img/nav3.png'
import nav4 from '../img/nav4.png'
import nav5 from '../img/nav5.png'
import nav6 from '../img/nav6.png'
import nav7 from '../img/nav7.png'
import logo from '../img/logo.png'

export default function Nav(){
    return(
        <div className="animate__animated animate__fadeInLeft">
            <nav className="cab-nav">
                <img src={logo} className="cab-logo"/>
                <div className="nav-link">
                    <img src={nav1}/>
                    <img src={nav2}/>
                    <img src={nav3}/>
                    <img src={nav4}/>
                    <img src={nav5}/>
                    <img src={nav6}/>
                    <img src={nav7}/>
                </div>
            </nav>
        </div>
    )
}