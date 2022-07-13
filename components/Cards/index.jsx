import React from 'react'
import './cards.css'
import starImg from '../../images/stars.svg'

export default function Cards(props) {
    return (
        <div className='card'>
            <img className='card-img' src={props.img} alt={props.alt} />
            <div className='card-info'>
                <h3>{props.title}</h3>
                <img src={starImg} alt="5 stars" />
                <span>$6000</span>
            </div>
        </div>
    )
}
