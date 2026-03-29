import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { RxDropdownMenu } from 'react-icons/rx';

const Navbar = () => {
    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <RxDropdownMenu size={30}/>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
                </div>
                <a className="
                    btn btn-ghost 
                    text-2xl font-bold
                    bg-gradient-to-r
                    from-[rgba(79,57,246,1)]
                    to-[rgba(149,20,250,1)]
                    bg-clip-text
                    text-transparent
                ">
                    DigiTools
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <a href="">
                    <CiShoppingCart size={28}/>
                </a>
                <a>Login</a>
                <button className="
                    btn rounded-full
                    bg-gradient-to-r
                    from-[rgba(79,57,246,1)]
                    to-[rgba(149,20,250,1)]
                    text-white
                ">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;