import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-bg">
            <Container className='contact-content'>
                <Row >
                    <Col xs={12} md={6}>
                        <h3>Let us handle your project, professionally.</h3>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <form action="">
                            <input type="email" name="" className="form-control" placeholder="Your Email Address" id="" />
                            <input type="text" name="" className="form-control my-4" placeholder="Your Name/Company's Name" id="" />
                            <textarea id="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-info main-btn mb-5">Send</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Contact;