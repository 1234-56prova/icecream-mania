import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyCart = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/cart')
        .then(res => res.json())
        .then(data => setProduct(data));
    
    }, [])

    return (
        <div>
            {
                products.map(product => {

                    <div className='flex items-center bg-white'>
                        <p>Price: {product.price}</p>
                        <p>Company</p>
                        <p>Price</p>
                    </div>

                })
            }
        </div>
    );
};

export default MyCart;