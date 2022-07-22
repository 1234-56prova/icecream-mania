import React from 'react';

const Trending = ({ coffee }) => {
    const { image, name, price } = coffee;

    return (
        <div className='flex lg:m-16 m-12 border glass'>
            <div className="avatar pt-10 lg:pt-2 lg:pl-10">
                <div className="lg:w-32 w-20 lg:h-full h-20 rounded-full">
                    <img src={image}  alt=''/>
                </div>
            </div>
            <p className='text-white m-10 font-bold text-xl'>{name}</p>
            <p className='text-gray-300 text-3xl m-10 w-1/3 font-mono'>${price}</p>
        </div>
    );
};

export default Trending;