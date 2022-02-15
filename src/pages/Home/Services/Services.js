import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://intense-crag-40845.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    })
    return (
        <div id="watches">
            <h2 className="text-clr mt-5">Dare To Explore</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;