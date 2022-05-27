import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="pt-5 sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order" className="text-dark">
                        <span>My Order</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;