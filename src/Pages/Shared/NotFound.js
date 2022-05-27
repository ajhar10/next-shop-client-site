import React from 'react';
import pageNotFoundImg from '../../images/page-not-found.png';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center my-3" style={{ backgroundColor: '#F7F9FB' }}>
            <img className='img-fluid' src={pageNotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;