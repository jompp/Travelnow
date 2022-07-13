import React from 'react'
import './discover.css'
import carTripImg from '../../images/discover.svg'

export default function Discover_Section() {
    return (
        <section id='discover-section' className='discover-section'>
            <div className='text-content'>
                <h1>Find your next place to travel</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                <div className='place-search'>
                    <input type="text" placeholder='Burj khalifa, Dub' />
                    <button className='search-btn'>Search</button>                    
                </div>
            </div>
            <img src={carTripImg} alt="Car trip" />
        </section>
    )
}
