import React from 'react';

const Trending = ({ coffee }) => {
    const { image, name, price } = coffee;

    return (
        <div className='flex border lg:m-20 m-4 glass'>
            <div className="avatar">
                <div className="lg:w-20 w-16 m-4 lg:h-20 h-16 rounded-full">
                    <img src={image}  alt=''/>
                </div>
            </div>
            <p className='text-white lg:mt-8 font-bold text-xl'>{name}</p>
            <p className='text-gray-300 lg:mt-8 lg:ml-10 text-3xl w-1/3 font-mono'>${price}</p>
        </div>
    );
};

export default Trending;