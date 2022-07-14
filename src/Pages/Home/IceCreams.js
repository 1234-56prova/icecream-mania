import React from 'react';

const IceCreams = ({ icecream }) => {
    const { image, flavour, name, price, about } = icecream;
    return (
            <div class="card w-96 m-4 bg-amber-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt={name} class="border-lime-600 rounded-xl" />
                </figure>
                <div class="card-body text-lime-700">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p className='badge badge-outline bg-amber-900 text-amber-200'>{flavour}</p>
                    <p className='text-justify'>{about}</p>
                    <div class="card-actions">
                        <button class="btn bg-lime-800 w-full">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default IceCreams;