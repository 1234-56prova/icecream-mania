import React from 'react';
import {Link} from 'react-router-dom';

const Trending = () => {

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