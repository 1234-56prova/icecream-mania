import React from 'react';

const Coffee = ({coffee}) => {
    const {image, name, price, about, phone} = coffee;
    return (
        <div className='m-10 w-96 border border-slate-200'>
            <div>
                <img src={image} className='w-96 p-3' alt="" />
            </div>
            <div>
                <h1 className='text-white text-2xl text-center'>{name}</h1>
                <h1 className='text-white text-center'>${price}</h1>
                <h1 className='text-white p-3 text-justify'>{about}</h1>
                <button className='btn px-20 ml-12 glass'>Buy Now</button>
                <p className='text-white text-center text-2xl'>Or else call: {phone}</p>
            </div>
        </div>
    );
};

export default Coffee;