import React from 'react';

const Bookings = () => {

    return (
        <div className='lg:flex mt-32 m-16 glass border rounded-none'>
            <div className='lg:w-1/2'>
                <img className='w-full' src="https://i.ibb.co/z20ffps/map.png" alt="" />
            </div>
            <div className='m-10 lg:w-1/2'>
                <p className='text-center'><small className='bg-amber-900 p-1 rounded-sm text-white font-bold'>RESERVATION</small></p>
                <h1 className='text-white text-center font-bold text-3xl lg:text-5xl'>BOOKING A TABLE</h1>
                <input type="text" placeholder="4 person" width='300px' className="input glass w-full m-3 lg:m-5" /><br />
                <input type="date" placeholder="7,22,2022" className="input glass w-full m-3 lg:m-5" /><br />
                <input type="email" placeholder="Email" className="input glass w-full m-3 lg:m-5" />
                <button className="btn bg-orange-200 m-3 lg:ml-56 btn-wide">BOOK A TABLE</button>
            </div>
        </div>
    );
};

export default Bookings;