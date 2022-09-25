import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Cart = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div class="drawer drawer-mobile bg-black">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>

                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-black text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='m-2 rounded-md text-white bg-amber-900 glass'><Link to='/cart/my-products'>My cart</Link></li>
                        <li className='m-2 rounded-md text-white bg-amber-900 glass'><Link to={`/cart/profile/${user?.name || user.displayName}`}>Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Cart;