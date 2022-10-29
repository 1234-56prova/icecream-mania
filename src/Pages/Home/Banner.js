import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero lg:min-h-screen bg-image">
            <div className="bg-opacity-40"></div>
            <div className="hero-content text-neutral-content">
                <div >
                    <h1 className="mb-5 uppercase text-6xl font-bold">roasted coffee <br />
                        for you</h1>
                    <p className="mb-5">The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.</p>
                    <div>
                        <button onClick={() => navigate('/coffees')} className="btn btn-wide lg:m-4 hover:bg-inherit bg-amber-900 ">TASTE COFFEE</button>                        
                        <button onClick={() => navigate('/about-us')} className="btn btn-wide lg:m-4 hover:bg-amber-900 bg-inherit">READ MORE</button>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;