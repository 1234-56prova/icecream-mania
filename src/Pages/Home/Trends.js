import React from 'react';

const Trends = ({icecream}) => {
    const {image, name, about} = icecream;

    return (
        <div className='w-trend mb-6'>
            <img className='rounded-full border border-4 border-amber-200 w-96' src={image} alt="" />
            <p className='text-2xl lg:ml-20 font-bold font-serif text-amber-800'>{name}</p>
            <p className='w-96 font-serif text-lime-800'>{about}</p>
        </div>
    );
};

export default Trends;