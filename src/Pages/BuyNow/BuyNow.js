import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import auth from '../../firebase.init';
const axios = require('axios');
const Swal = require('sweetalert2')


const BuyNow = () => {

    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const minimumOrd = parseInt(data.minOrder)

        if (product.minOrder < minimumOrd && product.availableItems >= minimumOrd) {
            data.status = 'Pending';
            axios.post('http://localhost:5000/addOrder', data)
                .then(result => {
                    if (result.data.insertedId) {
                        Swal.fire(
                            'Successfully!',
                            'Please Check your Email for your orders confirmation!',
                            'success'
                        )
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Error',
                text: 'Minimum Order ' + product.minOrder + ' and Minimum Order ' + product.availableItems,
                confirmButtonText: 'Ok'
            })
        }
    };


    return (
        <div >
            <div className="py-5 bg-light">
                <p className="text-center fw-bold py-5">Home \ Products \ Buy now </p>
            </div>
            <Container>
                <Row className="py-5">
                    <Col xs={12} md={6}>
                        <Image className="img-fluid h-100" src={product?.image}></Image>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card className="px-3 py-5 shadow">
                            <Card.Body>
                                <Card.Title className="fs-2">{product?.name}</Card.Title>
                                <Card.Text>
                                    {product?.description}
                                </Card.Text>
                                <Card.Title className="pt-3">Price: ${product?.price}</Card.Title>
                            </Card.Body>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" {...register("name", { required: true })} value={user?.displayName} /> <br />
                                <input className="form-control" {...register("email")} value={user?.email} /> <br />
                                <input className="form-control" {...register("pdName")} value={product?.name} /> <br />
                                <input className="form-control" type="number" {...register("minOrder")} placeholder="Order amount" /> <br />
                                <input className="form-control" {...register("address")} placeholder="Your address" /> <br />
                                <input className="form-control" type="number" {...register("phone")} placeholder="Your phone" /> <br />
                                <input className="btn btn-success btn-lg px-5 rounded-pill" type="submit" value="Submit" />
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BuyNow;