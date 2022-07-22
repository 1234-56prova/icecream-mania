import React from 'react';

const Specials = ({ coffee }) => {
    const { image, name, price } = coffee;
    return (
        <div className="border border-gray-400 m-10 w-96 shadow-xl">
            <figure><img src={image} className='p-3' alt="Shoes" /></figure>
            <div className=" bg-black m-2">
                <p className='text-white text-center uppercase'>Rating <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-800" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-800" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-800" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-amber-800" />
                </div></p>
                <h2 className="m-2 uppercase font-bold text-center text-white">
                    {name}
                </h2>
                <p className='text-orange-200 text-center m-2'><span className='uppercase text-white'>Price-</span>${price}</p>
            </div>
        </div>
    );
};

export default Specials;