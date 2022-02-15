import React from 'react';
import Banner from '../Banner/Banner';
import Exotic from '../Exotic/Exotic';
import Explore from '../Explore/Explore';
import Reviews from '../Reviews/Reviews';
import Section from '../Section/Section';
// import Service from '../Service/Service';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Exotic></Exotic>
            <Explore></Explore>
            <Section></Section>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;