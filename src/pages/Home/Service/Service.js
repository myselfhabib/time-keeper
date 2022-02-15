import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className='service'>
            <div className="top-watch2">
                <img src={img} className="rounded" alt="" />
            </div>
            <h4>{name}</h4>
            <p className="px-3">{description.slice(0, 180)}</p>
            <h5>Price: ${price}</h5>
            <Link to={`/booking/${_id} ${name}`}><button className="glow-on-hover2">Purchase</button></Link>
        </div>
    );
};

export default Service;