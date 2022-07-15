import React, { useEffect, useState } from 'react';
import useIcecream from '../../hooks/useIcecream';
import IceCreams from './IceCreams';

const Shop = () => {
    const [icecreams] = useIcecream();
    return (
        <div >
            <h1 className='text-center text-4xl text-lime-700 font-bold m-12 font-serif'>Icecreams!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                     icecreams.slice(0, 6).map(icecream => <IceCreams icecream={icecream}></IceCreams>)
                }
            </div>

        </div>
    );
};

export default Shop;