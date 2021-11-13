import React from 'react'
import './aboutUs.css'

export default function AboutUs_Section() {
    return (
        <section id='about-us-section' className='about-us-section'>
            <img src="../images/camping.svg" alt="Van trip" />
            <div className='text-content'>
                <h2>Our Quality Services</h2>
                <div className="service-info">
                    <div className='icon-box'><img src="../images/ticket.svg" alt="Ticket icon" /></div>
                    <div className='text-service-info'>
                        <h3>Ticket</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
                <div className="service-info">
                    <div className='icon-box'><img src="../images/car.svg" alt="Car icon" /></div>
                    <div className='text-service-info'>
                        <h3>Driver</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
                <div className="service-info">
                    <div className='icon-box'><img src="../images/airplane.svg" alt="Airplane icon" /></div>
                    <div className='text-service-info'>
                        <h3>Tour</h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}