import React from 'react'
import './footer.css'
import travelnowImg from '../../images/Travelnow.svg'

export default function Footer() {
    return (
        <footer>
            <div className='logo-links-box'>
                <div className='logo-text-box'>
                    <img src={travelnowImg} alt="Logo" />
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>
                <div className='footer-links'>
                    <div>
                        <h3>Tour</h3>
                        <ul>
                            <li>Thailand</li>
                            <li>Canada</li>
                            <li>Korea</li>
                            <li>Italy</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li>Account</li>
                            <li>Legal</li>
                            <li>Contact</li>
                            <li>Privacy Police</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Userful Pages</h3>
                        <ul>
                            <li>Deals</li>
                            <li>FAQs</li>
                            <li>Why Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='copyright-box'>© <span id='dinamic-year'>{new Date().getFullYear()}</span> · All rights reserved.</p>
        </footer>
    )
}
