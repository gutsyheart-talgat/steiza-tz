import React, { useState } from "react";
import './cabinet.css'
import aud from './img/Audience.png'
import photo from './img/photo.jpg'
import reach from './img/Reach.png'
import geo from './img/Geo.png'
import age from './img/Age.png'
import logoF from './img/logo-f.png'
import burger from './img/burger.png'
import Menu from "./Menu";
import Nav from "./Nav";
export default function Cabinet(){
    const [menuActive,setMenuActive]=useState(false)
    /* State используется для бургер меню */
    return(
        <div className="cab-back animate__animated animate__fadeIn">
            <Nav></Nav>
            <Menu active={menuActive} setActive={setMenuActive} className="Menu"/>
            <div className="container cabinet animate__animated animate__fadeInRight">
                {/* Классы animate__animated animate__fade используются для анимации. Взяты из библиотеки animate.css*/}
                <div className="cab-logoF">
                    <img src={logoF} className="logo-full"/>
                    <div className="burgerMenu" onClick={()=>setMenuActive(!menuActive)}>
                        <input className="menu__toggle" type="checkbox"/>
                        <img src={burger} className="cab-burger"/>
                    </div>
                </div>
                <div className="cab-title">
                    <h1 className="cab-h1">Личный кабинет</h1>
                    <p className="cab-p">Тут находятся разные типы графиков<br/> этого маркетплейса</p>
                </div>
                <div className="cab-account">
                    <div className="cab-admin">
                        <h3 className="admin-name">Талгат Джайликеев</h3>
                        <p className="admin-status"> Администратор</p>
                    </div>
                    <img className="cab-photo" src={photo}/>
                </div>
                <img className="cab-aud" src={aud}/>
                <img className="cab-reach" src={reach}/>
                <img className="cab-geo" src={geo}/>
                <img className="cab-age" src={age}/>
            </div>
        </div>
    )
}