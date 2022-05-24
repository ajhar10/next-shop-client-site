import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-5">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <Image style={{ height: '100px', background: 'white', padding: '4px' }} src={logo} className='rounded' />
                        <p className="mt-4 text-light opacity-75">Get daily tips and tricks for making your best home.</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="mb-4">Services</h3>
                        <div className="text-light opacity-75 pt-2">
                            <p className="lh-1">Repair Service</p>
                            <p className="lh-1">Free return</p>
                            <p className="lh-1">Member discount</p>
                            <p className="lh-1">24/7 Support</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="mb-4">Useful Links</h3>
                        <div className="text-light opacity-75 pt-2">
                            <p className="lh-1">About</p>
                            <p className="lh-1">Products</p>
                            <p className="lh-1">Shipping Rate</p>
                            <p className="lh-1">Help</p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="mb-4">Contacts</h3>
                        <div className="text-light opacity-75 pt-2">
                            <div className="d-flex align-items-center pt-2">
                                <i className="fas fa-home px-2"></i>
                                <span>Feni, Bangladesh</span>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <i className="far fa-envelope px-2"></i>
                                <span>ajhar@gmail.com</span>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <i className="fas fa-phone px-2"></i>
                                <span>+01 6390 760 52</span>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <i className="fas fa-print px-2"></i>
                                <span>+01 6390 760 52</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr className="mt-5 pb-0" />
                <div className="text-center text-muted">
                    <span> &#169; Copyright Next Shop 2022</span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;