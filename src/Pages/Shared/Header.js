import { signOut } from 'firebase/auth';
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = async () => {
        await signOut(auth);
    }
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown bg-black">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="bg-black text-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link to='/' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Home</Link></li>
                            <li tabindex="0">
                                <Link to='/' className=' ml-20 hover:text-orange-300 uppercase font-thin justify-between' >
                                    Menu
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-black text-white">
                                    <li><Link to='/' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Coffee</Link></li>
                                    <li><NavHashLink to='/home#coffee-machine' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Coffee machines</NavHashLink></li>
                                </ul>
                            </li>
                            <li><Link to='/about-us' className=' ml-20 hover:text-orange-300 uppercase font-thin'>About</Link></li>
                            <li><Link to='/cart' className=' ml-20 hover:text-orange-300 uppercase font-thin'>
                            Cart</Link></li>
                            {user ? <li><Link to='/' onClick={logOut} className=' ml-20 hover:text-orange-300 uppercase font-thin'>log Out</Link></li>
                                : <ul>
                                    <li><Link to='/login' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Login</Link></li>
                                    <li><Link to='/signUp' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Sign Up</Link></li>
                                </ul>}
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal hidden lg:flex p-0">
                        <li><Link to='/' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Home</Link></li>
                        <li tabindex="0">
                            <Link to='/' className='ml-20 hover:text-orange-300 uppercase font-thin'>
                                Menu
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-black text-white">
                                <li><Link to='/coffees' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Coffee</Link></li>
                                <li><NavHashLink smooth to='/home#coffee-machine' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Coffee machines</NavHashLink></li>
                            </ul>
                        </li>
                        <li><Link to='/about-us' className=' ml-20 hover:text-orange-300 uppercase font-thin'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-center lg:flex">
                    <Link to='/' className='sm:visible ml-20 hover:text-orange-300 uppercase font-thin' ><img className='lg:w-32 w-16 lg:p-4' src="https://xpressrow.com/wp/cafena/wp-content/themes/cafena/assets/img/logo/logo_white.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/cart' className='ml-20 hover:text-orange-300 uppercase font-thin'>Cart</Link></li>
                        {user ? <li><Link to='/' onClick={logOut} className=' ml-20 hover:text-orange-300 uppercase font-thin'>Logout</Link></li>
                            : <ul className='flex'>
                                <li><Link to='/login' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Login</Link></li>
                                <li><Link to='/signUp' className=' ml-20 hover:text-orange-300 uppercase font-thin'>Sign Up</Link></li>
                            </ul>}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;