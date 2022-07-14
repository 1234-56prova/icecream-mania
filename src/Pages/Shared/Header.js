import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-amber-200">
                <div className="navbar-start">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 bg-lime-700 text-amber-200 rounded-box w-52">
                                <li><Link className='hover:text-lime-700 hover:bg-amber-200' to='/'>Homepage</Link></li>
                                <li><Link className='hover:text-lime-700 hover:bg-amber-200' to='/about-us'>About</Link></li>
                                <li><Link className='hover:text-lime-700 hover:bg-amber-200' to='/blogs'>Blogs</Link></li>
                                <li><Link className='hover:text-lime-700 hover:bg-amber-200' to='/shop'>Shops</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <img src="https://i.ibb.co/kyZS5Cd/cream.png" width='200px' alt="" />
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <button className="btn btn-ghost btn-circle">
                        <div className='indicator'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>

                        </div>
                    </button>
                </div>
            </div>

        </div>

    );
};

export default Header;