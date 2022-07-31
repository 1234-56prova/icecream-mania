import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-orange-200 mt-40">
            <div>
                <img className='lg:w-32 w-16 lg:p-4' src="https://xpressrow.com/wp/cafena/wp-content/themes/cafena/assets/img/logo/logo_white.png" alt="" />                <p>CAFENA<br />Providing reliable coffee since 2014</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='/' className="link link-hover">Branding</Link>
                <Link to='/' className="link link-hover">Design</Link>
                <Link to='/' className="link link-hover">Marketing</Link>
                <Link to='/' className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/about' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
                <Link to='/' className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Cookie policy</Link>
            </div>
        </footer>

    );
};

export default Footer;