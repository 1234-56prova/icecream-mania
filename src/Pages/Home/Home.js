import React from 'react';
import Banner from './Banner';
import Shop from './Shop';
import Trending from './Trending';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shop></Shop>
            <Trending></Trending>
        </div>
    );
};

export default Home;