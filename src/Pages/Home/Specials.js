import React from 'react';
import useIcecream from '../../hooks/useIcecream';
import Trends from './Trends';

const Specials = () => {
    const [icecreams] = useIcecream();
    return (
        <div>
            {
                icecreams.map(icecream => icecream.flavour !=='strawberry' & icecream.flavour !== 'mint' ? <Trends icecream={icecream}></Trends> : <div className='hidden'></div>)
            }
        </div>
    );
};

export default Specials;