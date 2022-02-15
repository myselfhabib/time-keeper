import React from 'react';
import img from '../Booked/success.png';
import './Booked.css';

const Booked = () => {
    return (
        <div>
            <img className="booked" src={img} alt="" />
            <h3>Successfully Purchased✔️</h3>
        </div>
    );
};

export default Booked;