import './ExprienceCard.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ExprienceCard = ({ exprience }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div data-aos="fade-up" className="ExprienceCard">
            <img src={exprience.icon} alt="" style={{ width: '50px', display: 'block' }} className="mx-auto mb-3" />
            <h1 className="exprience-number">
                {exprience.number}<sup style={{ color: '#333366' }}>+</sup>
            </h1>
            <p className="pl-4">{exprience.description}</p>
        </div>
    )
}

export default ExprienceCard;