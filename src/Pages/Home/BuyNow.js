import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const BuyNow = () => {
    const { id } = useParams();
    const [coffee, setCoffee] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {

        fetch(`https://polar-journey-98399.herokuapp.com/coffees/${id}`)
            .then(res => res.json())
            .then(data => setCoffee(data));

    })

    const { name, available, about, _id, price, image, company, phone } = coffee;

    const handleCart = (event) => {
        event.preventDefault();

        const product = {
            name: name,
            about: about,
            company: company,
            price: price,
            phone: phone,
            email: user.email
        }

        fetch('https://polar-journey-98399.herokuapp.com/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success');
                setCoffee(data);
            });
    }
    return (
        <div>
            <div class="hero min-h-screen bg-black">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src={image} alt='' class="max-w-sm border border-stone-500 p-10 rounded-lg shadow-2xl" />
                    <form onSubmit={handleCart}>
                        <h1 class="text-white text-5xl font-bold">{name}</h1>
                        <p class="text-white py-6">{about}</p>
                        <p class="text-white">price: ${price}</p>
                        <p class="text-white">available: {available}</p>
                        <p class="text-white">company: {company}</p>
                        <p class="text-white">phone number: {phone}</p>
                        <button class="btn glass btn-wide mt-8" type='submit'>ADD TO CART</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;