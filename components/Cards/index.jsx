import React from 'react'
import './cards.css'

export default function Cards(props) {
    return (
        <div className='card'>
            <img className='card-img' src={props.img} alt={props.alt} />
            <div className='card-info'>
                <h3>{props.title}</h3>
                <img src="../images/stars.svg" alt="5 stars" />
                <span>$6000</span>
            </div>
        </div>
    )
}
