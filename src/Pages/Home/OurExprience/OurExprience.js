import './OurExprience.css';
import React, { useEffect, useState } from 'react';
import ExprienceCard from '../ExprienceCard/ExprienceCard';

const OurExprience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('exprience.json')
            .then(res => res.json())
            .then(data => {
                setExperiences(data)
            })
    })

    return (
        <div className="OurExprience">
            <h1 className="text-center" style={{ color: '#333366' }}>
                Our <span style={{ color: '#fd4b4b' }}>Exprience</span>
            </h1>

            <div className="container pt-5">
                <div className="exprience-container">
                    {
                        experiences.map((exprience) => <ExprienceCard key={exprience._id} exprience={exprience} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default OurExprience;