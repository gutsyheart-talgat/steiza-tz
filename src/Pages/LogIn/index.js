import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import { NavLink } from 'react-router-dom'
import "./logIn.css"

export default function LogIn(){    
    /* здесь useState используется для валидации форм */
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [lastname,setLastname]=useState('')
    const [password,setPassword]=useState('')
    /*state начальное состояние input */
    const [emailDirty, setEmailDirty]=useState(false)
    const [nameDirty, setNameDirty]=useState(false)
    const [lastnameDirty, setLastnameDirty]=useState(false)
    const [passwordDirty, setPasswordDirty]=useState(false)
    /*State для проверки нажимали ли мы на input*/
    const [emailError, setEmailError]=useState('Поля обязательны для заполнения')
    const [nameError, setNameError]=useState('Поля обязательны для заполнения')
    const [lastnameError, setLastnameError]=useState('Поля обязательны для заполнения')
    const [passwordError, setPasswordError]=useState('Поля обязательны для заполнения')
    /*State ошибки */
    const EmailValid = (e) =>{
        setEmail(e.target.value)
        if(!e.target.value){
            setEmailError('Поля обязательны для заполнения')
        }else{
            setEmailError('')
        }
    }
    const NameValid = (e) =>{
        setName(e.target.value)
        if(!e.target.value){
            setNameError('Поля обязательны для заполнения')
        }else{
            setNameError('')
        }
    }
    const LastnameValid = (e) =>{
        setLastname(e.target.value)
        if(!e.target.value){
            setLastnameError('Поля обязательны для заполнения')
        }else{
            setLastnameError('')
        }
    }
    const PasswordValid = (e) =>{
        setPassword(e.target.value)
        if(!e.target.value){
            setPasswordError('Поля обязательны для заполнения')
        }else{
            setPasswordError('')
        }
    }
    /*функции Valid меняют value в input и делают проверку на пустоту */
    const blurHandle = (e)=>{
        switch(e.target.name){
            case "email":
                setEmailDirty(true)
                break
        }
        switch(e.target.name){
            case "name":
                setNameDirty(true)
                break
        }
        switch(e.target.name){
            case "lastname":
                setLastnameDirty(true)
                break
        }
        switch(e.target.name){
            case "password":
                setPasswordDirty(true)
                break
        }
    }
    /*blurHandle функция проверят нажимали ли мы на формы, чтобы не выдавать ошибку сразу */
    return(       
        <div className="login-background animate__animated animate__fadeIn">
            <div className="container login">
                <div className="login-logo wow animate__animated animate__fadeInLeft">
                    <img src={logo}/>
                </div>
                <div className="login-path wow animate__animated animate__fadeInRight">
                    {/* Классы animate__animated animate__fade используются для анимации. Взяты из библиотеки animate.css*/}
                    <h2 className="login-h1">Создать учетную запись</h2>
                    <p className="login-p">У вас уже есть учетная запись? Войти</p>
                    <form className="login-email">
                        <input onChange={e => EmailValid(e)} onBlur={(e)=>blurHandle(e)} name='email' className="email-input" placeholder='Адрес электронной почты или телефон' value={email}/>
                        {(emailDirty && emailError) && <div className='login-line'>{emailError}</div>}
                    </form>
                    <div className="login-FIO">
                        <form className="login-name">
                            <input placeholder='Имя' name="name" onChange={e => NameValid(e)} onBlur={(e)=>blurHandle(e)} value={name}/>
                            {(nameDirty && nameError) && <div className='login-line'>{nameError}</div>}
                        </form>
                        <form className="login-lastname">
                            <input placeholder='Фамилия' name="lastname"  onChange={e => LastnameValid(e)} onBlur={(e)=>blurHandle(e)} value={lastname}/>
                            {(lastnameDirty && lastnameError) && <div className='login-line'>{lastnameError}</div>}
                        </form>
                    </div>
                    <form className="login-password">
                        <input placeholder='Пароль' type="password" name="password"  onChange={e => PasswordValid(e)} onBlur={(e)=>blurHandle(e)} value={password}/>
                        {(passwordDirty && passwordError) && <div className='login-line'>{passwordError}</div>}                        
                    </form>
                    <form className="login-country">
                        <select className="login-countrySel">
                            <option>Страна</option>
                            <option>Кыргызстан</option>
                            <option>Россия</option>
                            <option>Узбекистан</option>
                            <option>Казахстан</option>
                            <option>Беларусь</option>
                        </select>                       
                    </form>
                    <div className='login-person'>
                        <div className="login-gender">
                            <label>
                                <p className='login-genderP'>Мужчина</p>
                                <input type="radio" name="ques"  className='gender-input'/>                              
                            </label>
                            <br/>
                            <label>
                                <p className='login-genderP'>Женщина</p>
                                <input type="radio" name="ques"  className='gender-input'/>
                            </label>
                        </div>
                        <form className="login-calendar">
                            <input type="date" name="calendar"/>         
                        </form>
                    </div>
                    <NavLink to="/cabinet"><button className="login-btn">Создать учетную запись</button></NavLink>
                </div>
            </div>
        </div>
    )
}
