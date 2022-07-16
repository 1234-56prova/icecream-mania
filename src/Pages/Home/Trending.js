import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import useIcecream from '../../hooks/useIcecream';
import Trends from './Trends';

const Trending = () => {
    const [icecreams] = useIcecream();
    const {location} = useLocation();
    console.log(location);
    return (
        <div>
            <div class="tabs">
                <Link to='/home#mint' class="tab tab-lg tab-lifted">Mint</Link>
                <Link to='/home#strawberry' class="tab tab-lg tab-lifted">Strawberry</Link>
                <Link to='/home#special' class="tab tab-lg tab-lifted">Specials</Link>
            </div>
        </div>
    );
};

export default Trending;