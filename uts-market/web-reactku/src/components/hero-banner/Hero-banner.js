import React from 'react';
import './Hero-banner.css';

const HeroBanner = () => {

    return (
        <div className="hero-banner row">
            <div className="col-3 left-banner"></div>
            <div className="text col-6 ">
                <h1>Neo Online Shop</h1>
                <p>Welcome to our Shop!</p>
            </div>
            <div className="col-3 right-banner"></div>
        </div>
    );

}

export default HeroBanner;
