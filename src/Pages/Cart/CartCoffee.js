import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
const CartCoffee = ({ coffee, setCoffees, coffees }) => {

    const { price, name, company, _id } = coffee;

    const handleDelete = ( id ) => {
        fetch(`https://polar-journey-98399.herokuapp.com/cart/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const rest = coffees.filter(coffee => coffee._id !== id);
            setCoffees(rest);
        })   
    }
    return (
        <div className='flex glass lg:m-10 place-content-between text-slate-50'>

            <div className='flex lg:mt-auto mt-8'>

                <p className='lg:p-10 p-1 text-lg'>{name}</p>

                <p className='lg:p-10 p-1 text-lg'>{price}</p>

                <p className='lg:p-10 p-1 text-lg'>{company}</p>

            </div>

            <div className='lg:mt-4'>
                
                <button className='btn lg:btn-wide lg:m-4 hover:bg-inherit bg-amber-900'>BUY NOW</button>
                <button onClick={() => handleDelete(_id)} ><FontAwesomeIcon width='50px'  className=' rounded-xl bg-slate-50 text-amber-900' icon={faMinus}/></button>
            </div>

        </div>
    );
};

export default CartCoffee;