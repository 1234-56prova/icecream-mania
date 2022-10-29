import React from 'react';
import { useNavigate } from 'react-router-dom';

const Machine = () => {
    const navigate = useNavigate();

    return (
        <div id='coffee-machine' className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://xpressrow.com/wp/cafena/wp-content/uploads/2022/05/product-big.png" alt='' className="max-w-sm w-1/3 rounded-lg shadow-2xl" />
                <div  className='w-2/3'>
                    <h1 className="lg:text-4xl text-3xl text-white font-bold">COFFEE MACHINE,BUY FOR HOME</h1>
                    <p className="py-6 text-gray-300 ">
                        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
                    </p>
                    <p className="py-6 text-gray-300 ">
                        mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.                    </p>
                    <a href='https://www.amazon.com/s?k=coffee+machine'><button className="btn bg-orange-200 lg:btn-wide">Discover Now</button></a>
                </div>
            </div>
        </div>
    );
};

export default Machine;