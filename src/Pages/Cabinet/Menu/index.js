import React from "react";
import "../cabinet.css"

export default function Menu({active,setActive}){
    return(
        <div className={active ? "cab-menu active" : "cab-menu" }>
            <div className="menu-content">
                <ul className="menu__box">
                    <li><a className="menu__item" href="#">Телефоны</a></li>
                    <li><a className="menu__item" href="#">Планшеты</a></li>
                    <li><a className="menu__item" href="#">Дроны</a></li>
                    <li><a className="menu__item" href="#">Игрушки</a></li>
                </ul>
            </div>
        </div>
    )
}