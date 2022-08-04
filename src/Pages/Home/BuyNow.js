import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/coffees/${id}`)
        .then(res => res.json())
        .then(data => setCoffee(data));

    })
    const {name, available, about, _id, price, image, company, phone} = coffee;
    return (
        <div>
            <div class="hero min-h-screen bg-black">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src={image}  alt='' class="max-w-sm border border-stone-500 p-10 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-white text-5xl font-bold">{name}</h1>
                        <p class="text-white py-6">{about}</p>
                        <p class="text-white">price: ${price}</p>
                        <p class="text-white">available: {available}</p>
                        <p class="text-white">company: {company}</p>
                        <p class="text-white">phone number: {phone}</p>
                        <button class="btn glass btn-wide mt-8">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;