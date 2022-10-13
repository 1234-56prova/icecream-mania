import React from 'react';

const CartCoffee = ({ coffee }) => {

    const { price, name, company } = coffee;

    return (
        <div className='flex glass m-10 place-content-between text-slate-50'>

            <div className='flex lg:mt-auto mt-10'>

                <p className='lg:p-10 p-2 text-lg'>{name}</p>

                <p className='lg:p-10 p-2 text-lg'>{price}</p>

                <p className='lg:p-10 p-2 text-lg'>{company}</p>

            </div>

            <div className='mt-4'>
                
                <button className='btn lg:btn-wide m-4 hover:bg-inherit bg-amber-900'>BUY NOW</button>

            </div>

        </div>
    );
};

export default CartCoffee;