import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from '../UserRow/UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section style={{ overflow: 'scroll' }}>
            <div className="row container-fluid">
                <Col xs={12} md={10}>
                    <h2>All Users</h2>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <UserRow
                                    key={user._id}
                                    user={user}
                                    refetch={refetch}
                                ></UserRow>)
                            }
                        </tbody>
                    </Table>
                </Col>
            </div>
        </section>
    );
};

export default Users;