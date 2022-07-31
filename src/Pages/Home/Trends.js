import React from 'react';
import useCoffees from '../../hooks/useCoffees';
import Trending from './Trending';

const Trends = () => {
    const [coffees] = useCoffees();
    return (
        <div className=''>
            <p className='text-center'><small className='bg-amber-900 p-1 rounded-sm text-white font-bold '>POPULAR PRODUCTS</small></p>
            <h1 className='text-white font-bold text-5xl text-center'>CAFENA POPULAR PRODUCTS</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                {
                    coffees.slice(0, 6).map(coffee => <Trending coffee={coffee}></Trending>)
                }
            </div>

        </div>
    );
};

export default Trends;