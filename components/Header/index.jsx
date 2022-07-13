import React, { useState } from 'react'
import './header.css'
import travelnowImg from '../../images/Travelnow.svg'

export default function Header() {
    const [active, setMode] = useState(false)
    function toogleMenu() {
        setMode(!active)
    }

    if(active) {
        document.getElementsByTagName('body')[0].classList.add('active')
    } else {
        document.getElementsByTagName('body')[0].classList.remove('active')
    }
    
    return (
        <header>
            <nav className='header-nav'>
                <img src={travelnowImg} alt="Logo Travelnow"/>
                <div className='nav-links'>
                    <a href="#discover-section">Discover</a>
                    <a href="#destination-section">Destination</a>
                    <a href="#about-us-section">About us</a>
                </div>
                <button className="book-btn">Book a tour</button>
                <button className={active ? 'hamburguer-menu active' : 'hamburguer-menu'} onClick={toogleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            <nav className= {active ? 'nav-links active' : 'nav-links'}>
                <a href="#">Discover</a>
                <a href="#">Destination</a>
                <a href="#">About us</a>
                <button className="book-btn">Book a tour</button>
            </nav>
        </header>
    )
}
