import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import './Sidebar.css'


const Sidebar = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="pt-5 sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {!admin && <>
                    <li>
                        <Link to="/dashboard/myOrders" className="text-dark">
                            <i className="fas fa-shopping-cart"></i><span> My Order</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard/review" className="text-dark">
                            <i className="far fa-sticky-note"></i><span> Review</span>
                        </Link>
                    </li>
                </>

                }


                {
                    admin && <>
                        <li>
                            <Link to="/dashboard/users" className="text-dark">
                                <i className="fas fa-user-shield"></i><span> Make Admin</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/addProduct" className="text-dark">
                                <i className="far fa-share-square"></i><span> Add Product</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/manageAllOrders" className="text-dark">
                                <i className="fas fa-tasks"></i><span> Manage Orders</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </div>
    );
};

export default Sidebar;