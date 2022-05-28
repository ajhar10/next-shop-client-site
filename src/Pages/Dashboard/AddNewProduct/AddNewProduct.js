import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
const Swal = require('sweetalert2')

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://stark-thicket-86724.herokuapp.com/addProduct', data)
            .then(result => {
                if (result.data.insertedId) {
                    Swal.fire(
                        'Successfully!',
                        'Add a new Product!',
                        'success'
                    )
                    reset()
                }
            })
    }
    return (
        <div className="pb-5 pt-4">

            <Row>
                <Col xs={12} lg={8}>
                    <div className="shadow py-5 px-3">
                        <h2 className="pb-5 text-center">Add a New Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control" {...register("name", { required: true })} placeholder="Product Name" /> <br />
                            <p className='text-muted'><small>Image link: https://i.ibb.co/VmHNSbw/t1.webp</small></p>
                            <input className="form-control" {...register("image", { required: true })} placeholder="Image Url" /> <br />
                            <textarea className="form-control" {...register("description", { required: true })} placeholder="Description" /> <br />
                            <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Price" /> <br />
                            <input className="form-control" type="number" {...register("minOrder", { required: true })} placeholder="Minimum Order" /> <br />
                            <input className="form-control" type="number" {...register("availableItems", { required: true })} placeholder="Available Items" /> <br />
                            <div className="">
                                <input className="btn btn-success btn-lg px-5 rounded-pill" type="submit" value="Add a New Product" />
                            </div>
                        </form>
                    </div>
                </Col>

            </Row>

        </div>
    );
};

export default AddNewProduct;