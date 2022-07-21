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
            <p className='text-center mt-24'><small className='bg-amber-900 p-1 rounded-sm text-white font-bold'>CUSTOMER FEEDBACK</small></p>
            <h1 className='text-white font-bold text-5xl text-center'>OUR CUSTOMERS REVIEW</h1>
            <img className='w-32 reviewers' src="https://i.ibb.co/FXBJbqV/quotation.png" alt="" />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;