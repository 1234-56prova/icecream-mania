import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartCoffee from './CartCoffee';

const Cart = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect( () => {

        fetch('https://polar-journey-98399.herokuapp.com/cart')

        .then(res => res.json())

        .then(data => setCoffees(data));

    }, [])

    return (
        <div>
            {
                coffees.map(coffee => <CartCoffee coffee={coffee}></CartCoffee>)
            }
        </div>
    );
};

export default Cart;