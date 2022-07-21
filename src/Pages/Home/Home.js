import React from 'react';
import Banner from './Banner';
import History from './History';
import Machine from './Machine';
import Products from './Products';
import Reviews from './Reviews';
import Trends from './Trends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <History></History>
            <Trends></Trends>
            <Machine></Machine>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;