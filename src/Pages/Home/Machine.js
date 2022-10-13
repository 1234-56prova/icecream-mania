import React from 'react';

const Machine = () => {
    return (
        <div id='coffee-machine' className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/product-big.png" alt='' className="max-w-sm w-1/3 rounded-lg shadow-2xl" />
                <div  className='w-2/3'>
                    <h1 className="text-4xl text-white font-bold">COFFEE MACHINE,BUY FOR HOME</h1>
                    <p className="py-6 text-gray-300 ">
                        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
                    </p>
                    <p className="py-6 text-gray-300 ">
                        mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.                    </p>
                    <button className="btn bg-orange-200 btn-wide">Discover Now</button>
                </div>
            </div>
        </div>
    );
};

export default Machine;