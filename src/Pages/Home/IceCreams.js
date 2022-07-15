import React from 'react';

const IceCreams = ({ icecream }) => {
    const { image, name, price } = icecream;
    return (
        <div class="m-8">
            <div className="w-96">
                <img className='border rounded-lg border-4' src={image} alt="" />
            </div>
            <div className='text-center'>
                <p className='text-2xl font-bold font-serif text-amber-800'>{name}</p>
                <p className='text-2xl font-serif text-lime-800'>${price}</p>
                <button className='btn w-full bg-lime-800'>Buy Now</button>
            </div>
        </div>
    );
};

export default IceCreams;