import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartProduct from './CartProduct';

const MyCart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://polar-journey-98399.herokuapp.com/cart')
        .then(res => res.json())
        .then(data => setProducts(data));
    
    }, [])

    return (
        <div className='m-0 text-slate-50'>
           <p>Ilma Prova</p>
           {
            products.map(product => <CartProduct product={product} />)
           }
        </div>
    );
};

export default MyCart;