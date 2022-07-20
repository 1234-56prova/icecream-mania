import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-image">
            <div class="hero-overlay bg-opacity-40"></div>
            <div class="hero-content text-neutral-content">
                <div >
                    <h1 class="mb-5 uppercase text-6xl font-bold">roasted coffee <br />
                        for you</h1>
                    <p class="mb-5">The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.</p>
                    <div>
                        <button class="btn btn-wide m-4 hover:bg-inherit bg-amber-900 ">TASTE COFFEE</button>                        
                        <button class="btn btn-wide m-4 hover:bg-amber-900 bg-inherit">READ MORE</button>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;