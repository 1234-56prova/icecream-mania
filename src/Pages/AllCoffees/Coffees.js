import React from 'react';
import useCoffees from '../../hooks/useCoffees';
import Coffee from './Coffee';

const Coffees = () => {
    const [coffees] = useCoffees();
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                coffees.map(coffee => <Coffee coffee={coffee}></Coffee>)
            }
        </div>
    );
};

export default Coffees;