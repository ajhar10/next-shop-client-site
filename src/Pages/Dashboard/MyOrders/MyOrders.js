import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Swal = require('sweetalert2')

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myOrders/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

                .then(res => res.json())
                .then(data => setMyOrders(data))
        }

    }, [user?.email])

    const handleCancel = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/delete/${id}`)
                    .then(result => {
                        if (result.data.deletedCount) {
                            const remain = myOrders.filter(order => order._id !== id);
                            setMyOrders(remain)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your Order has been deleted.',
                    'success'
                )
            }
        })

    }

    return (
        <section style={{ overflow: 'scroll' }}>
            <div className="row container-fluid">
                <Col xs={12} md={10}>
                    <h2>My orders</h2>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Product</th>
                                <th>Email</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((order, index) => <tr>
                                    <td className="text-center">{index + 1}</td>
                                    <td>{order?.pdName || 'Name Loading'}</td>
                                    <td>{order.email}</td>
                                    <td className="text-center">{order?.status}</td>
                                    <td className="text-center">
                                        <button onClick={() => handleCancel(order._id)} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </Col>
            </div>
        </section>
    );
};

export default MyOrders;