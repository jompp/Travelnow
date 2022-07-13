import React from 'react'
import './destination.css'
import Cards from '../Cards/index'
import travelImg from '../../images/travel.svg'
import mountainImg from '../../images/Mountains.jpg'
import campingImg from '../../images/Camping.jpg'

export default function Destination_Section() {
    return (
        <section id='destination-section' className='destination-section'>
            <div className='img-txt-content-box'>
                <img src={travelImg} alt="Two people hiking" />
                <div className='text-content'>
                    <h2>Travel to any corner of the World</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                    <div className='company-info'>
                        <p><span>20</span><br />Years<br />Experience</p>
                        <p><span>55</span><br />Destination<br />Collaboration</p>
                        <p><span>600+</span><br />Tourist<br />Destination</p>
                    </div>
                    <button className='explore-btn'>Explore Destination</button>
                </div>
            </div>
            <div className='cards-box'>
                <Cards img={mountainImg} alt='Mountains' title='Travel to Mountains' />
                <div className='stronger-shadow'><Cards img='../images/Desert.jpg' alt='Desert' title='Travel to Desert' /></div>
                <Cards img={campingImg} alt='Mountain camp' title='Camping in Mountains' />
            </div>
        </section>
    )
}
