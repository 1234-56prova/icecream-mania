import React from 'react';
import useIcecream from '../../hooks/useIcecream';
import Trends from './Trends';

const Strawberry = () => {
    const [icecreams] = useIcecream();

    return (
        <div>
            {
                icecreams.map(icecream => icecream.flavour === 'mint' ? <Trends icecream={icecream}></Trends> : <div className='hidden'></div>)
            }
        </div>
    );
};

export default Strawberry;