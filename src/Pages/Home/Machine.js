import React from 'react';

const Machine = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='w-1/3' src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/product-big.png" class="max-w-sm rounded-lg shadow-2xl" />
                <div  className='w-2/3'>
                    <h1 class="text-5xl text-white font-bold">COFFEE MACHINE,BUY FOR HOME</h1>
                    <p class="py-6 text-gray-300 w-96">
                        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
                    </p>
                    <p class="py-6 text-gray-300 w-96">
                        mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.                    </p>
                    <button class="btn bg-orange-200 btn-wide">Discover Now</button>
                </div>
            </div>
        </div>
    );
};

export default Machine;