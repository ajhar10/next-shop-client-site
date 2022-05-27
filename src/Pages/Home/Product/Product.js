import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, price, image, description, minOrder, availableItems, _id } = product;

    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/buyNow/${id}`);
    }
    return (
        <Col xs={12} md={4}>
            <Card className="text-center my-3">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h6>Minimum Order: {minOrder}</h6>
                    <h6>Available Items: {availableItems}</h6>
                    <div className="d-flex justify-content-around align-items-center">
                        <p className="fw-bold fs-5">${price}</p>
                        <Button onClick={() => handleNavigate(_id)} variant="info" className="rounded-pill px-4">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;