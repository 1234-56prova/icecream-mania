import React from 'react';

const CartProduct = ({name, image, price}) => {
    return (
        <div>
           
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default CartProduct;