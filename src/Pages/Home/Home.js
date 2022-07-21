import React from 'react';
import Banner from './Banner';
import History from './History';
import Trends from './Trends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <History></History>
            <Trends></Trends>
        </div>
    );
};

export default Home;