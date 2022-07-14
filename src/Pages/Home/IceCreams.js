import React from 'react';

const IceCreams = ({ icecream }) => {
    const { image, flavour, name, price, about } = icecream;
    return (
            <div className="card w-96 m-4 bg-amber-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt={name} className="border-lime-600 rounded-xl" />
                </figure>
                <div className="card-body text-lime-700">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p className='badge badge-outline bg-amber-900 text-amber-200'>{flavour}</p>
                    <p className='text-justify'>{about}</p>
                    <div className="card-actions">
                        <button className="btn bg-lime-800 w-full">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default IceCreams;