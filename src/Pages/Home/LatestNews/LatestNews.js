import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-center pt-3">LATEST NEWS</h1>
                <div className="d-flex justify-content-center pb-3">
                    <hr style={{ width: '70px', height: '5px', marginTop: '0px', background: 'black' }} />
                </div>
                <Row className="pb-5">
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ibb.co/6wdCY9H/t4.webp" />
                            <Card.Body>
                                <Card.Title>Voltmeter why to use</Card.Title>
                                <Card.Text>
                                    A voltmeter is used to read voltage levels and verify that circuits are “live” or off.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ibb.co/K71kHDZ/t3.webp" />
                            <Card.Body>
                                <Card.Title>Torpedo Level why to use</Card.Title>
                                <Card.Text>
                                    A small level, such as a torpedo level and is used to make sure your work is level.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card className="mt-4">
                            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.ibb.co/VmHNSbw/t1.webp" />
                            <Card.Body>
                                <Card.Title>Tape Measure why to use</Card.Title>
                                <Card.Text>
                                    A standard tape measure is used for all kinds of field measurements.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LatestNews;