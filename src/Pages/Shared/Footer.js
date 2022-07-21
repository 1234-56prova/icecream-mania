import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div className='bg-black lg:flex mt-20'>
            <div className='ml-32'>
                <img className='lg:w-32 w-16 lg:p-4' src="https://xpressrow.com/wp/cafena/wp-content/themes/cafena/assets/img/logo/logo_white.png" alt="" />
                <p className='text-white'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis  <br />quam venenatis fringilla. Morbi vestibulum</p>
            </div>
            <div className='flex mt-10 ml-56'>
                <img src="https://i.ibb.co/d28XBcQ/black-fb.png" className='w-10 h-8 m-3 bg-amber-700 rounded-lg' alt="" />
                <img src="https://i.ibb.co/d28XBcQ/black-fb.png" className='w-10 h-8 m-3 bg-amber-700 rounded-lg' alt="" />
                <img src="https://i.ibb.co/d28XBcQ/black-fb.png" className='w-10 h-8 m-3 bg-amber-700 rounded-lg' alt="" />
            </div>
        </div>

    );
};

export default Footer;