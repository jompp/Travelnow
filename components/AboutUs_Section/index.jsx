import React from 'react'
import './aboutUs.css'
import campingImg from '../../images/camping.svg'
import ticketImg from '../../images/ticket.svg'
import carImg from '../../images/car.svg'
import airplaneImg from '../../images/airplane.svg'

export default function AboutUs_Section() {
    return (
        <section id='about-us-section' className='about-us-section'>
            <img src={campingImg}alt="Van trip" />
            <div className='text-content'>
                <h2>Our Quality Services</h2>
                <div className="service-info">
                    <div className='icon-box'><img src={ticketImg} alt="Ticket icon" /></div>
                    <div className='text-service-info'>
                        <h3>Ticket</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
                <div className="service-info">
                    <div className='icon-box'><img src={carImg} alt="Car icon" /></div>
                    <div className='text-service-info'>
                        <h3>Driver</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
                <div className="service-info">
                    <div className='icon-box'><img src={airplaneImg} alt="Airplane icon" /></div>
                    <div className='text-service-info'>
                        <h3>Tour</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}