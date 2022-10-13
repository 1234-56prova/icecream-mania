import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex place-content-center'>

            <img width='300px' height='200px' className='m-10' src="https://i.ibb.co/51MfZmq/coffee.jpg" alt="" />

            <div className='text-slate-50 w-1/2 mt-20'>
                <h1 className='text-6xl'>Oops! This page of coffee isn't made yet!</h1>
                <p className='text-3xl'>Please go <Link className='underline text-amber-200' to='/'>home</Link> for now!</p>
            </div>

        </div>
    );
};

export default NotFound;