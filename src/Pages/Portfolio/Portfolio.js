import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Portfolio = () => {
    return (
        <div>
            <Card className='w-50 mx-auto ' style={{ marginTop: '8rem' }}>

                <ListGroup className="list-group-flush">
                    <ListGroupItem><span className='text-info'>Name: </span>Ajharul Islam</ListGroupItem>
                    <ListGroupItem><span className='text-info'>Email: </span>ajharrimon90@gmail.com</ListGroupItem>
                    <ListGroupItem><span className='text-info'>Education: </span>Comilla University(2017-2022)</ListGroupItem>

                </ListGroup>

                <ListGroup className="list-group-flush">

                    <ListGroupItem> <h5 className='text-info '>My Skill: </h5>HTML, CSS, Bootstrap, Tailwind, JavaScript, React, NodeJs, Firebase etc.</ListGroupItem>

                </ListGroup>

                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><h5 className='text-info'>My Project: </h5></ListGroupItem>
                        <ListGroupItem><span className='text-info'>Tirez: </span>https://tirez-bfac7.web.app/</ListGroupItem>
                        <ListGroupItem><span className='text-info'>Fitness: </span>https://fitness-blender-d10c8.web.app/</ListGroupItem>
                        <ListGroupItem><span className='text-info'>Dhaka_Convention: </span>https://dhaka-convention-1206.netlify.app/</ListGroupItem>


                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Portfolio;