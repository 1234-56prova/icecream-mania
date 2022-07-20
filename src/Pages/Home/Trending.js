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
            <div className="tabs">
                <Link to='/home#mint' className="tab tab-lg tab-lifted">Mint</Link>
                <Link to='/home#strawberry' className="tab tab-lg tab-lifted">Strawberry</Link>
                <Link to='/home#special' className="tab tab-lg tab-lifted">Specials</Link>
            </div>
        </div>
    );
};

export default Trending;