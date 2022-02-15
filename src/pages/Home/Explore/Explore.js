import React from 'react';
import img from '../../../images/explore/explore.jpg'
import './Explore.css'

const Explore = () => {
    return (

        <div>
            <div className="explore">
                <div>
                    <img className="explore1" src={img} alt="" />
                </div>
                <div>
                    <h2 className="text">L U X U R Y  </h2>  W A T C H E S

                    <p className="text2">Discover our finely curated collection of <br />
                        investment-worthy diamonds and gemstones,  <br />
                        breathtaking designs,and exceptional craftsmanship</p>
                    <button className="see-more">SEE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Explore;