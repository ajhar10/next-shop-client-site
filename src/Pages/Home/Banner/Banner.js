import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

    return (
        <div className="banner-section d-flex justify-content-center align-items-center">
            <Container className='background'>
                <Row>
                    <Col xs={12} md={6}>

                        <div className="text-center">
                            <h1 className="banner-title ">All Electronic Tools</h1>
                            <h4 className=" font-weight-bold ">One Electronic Hub That Has All</h4>
                            <Button variant="success" className="btn btn-lg btn-outline-white rounded-pill px-5 mt-3"> Shop Now</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;