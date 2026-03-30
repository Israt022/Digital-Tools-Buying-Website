import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { RxDropdownMenu } from 'react-icons/rx';

const Navbar = ({cart}) => {
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
                    from-[#4F39F6]
                    to-[#9514FA]
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
            <div className="navbar-end gap-5 flex-wrap">
                <a className='relative'>
                    {
                        cart.length > 0 ? 
                        <>
                            <span className='container block'><CiShoppingCart size={28}/></span>
                            <span className='absolute -top-3 -right-4 text-white text-xs py-1 bg-red-500 px-2 rounded-full'>{cart.length}</span>
                        </>: 
                        <span className='container block'><CiShoppingCart size={28}/></span>
                    }
                    
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