import React from 'react';
import useCoffees from '../../hooks/useCoffees';
import Specials from './Specials';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [coffees] = useCoffees();
    const navigate = useNavigate();
    return (
        <div>
            <div className="lg:flex">
                <div className='lg:m-20 m-16 w-2/3'>
                    <p><small className='bg-amber-900 p-1 rounded-sm text-white font-bold'>POPULAR PRODUCT</small></p>
                    <h1 className='text-white font-bold lg:text-5xl text-4xl'>CAFENA POPULAR PRODUCTS</h1>
                </div>
                <div className='mt-28 w-1/3'>
                    <button onClick={() => navigate('/coffees')} className="btn bg-orange-200 lg:btn-wide w-48 ml-12 lg:ml-20">VIEW ALL PRODUCTS</button>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    coffees.slice(0, 3).map(coffee => <Specials coffee={coffee}></Specials>)
                }
            </div>
        </div>

    );
};

export default Products;