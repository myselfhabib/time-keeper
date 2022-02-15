import React from 'react';
import './Exopic.css'

const Exopic = ({ expert }) => {
    const { img } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12 card">
            <img className="top-watch" src={img} alt="" /> <br />
            <button className="glow-on-hover" type="button">Time Keeper</button>
        </div>
    );
};

export default Exopic;