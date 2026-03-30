import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            {/* Part - 1 */}
            <div className='space-y-10 flex flex-col 
                    bg-gradient-to-r
                    from-[#4F39F6]
                    to-[#9514FA] py-30 mx-auto items-center'>
                <div 
                    className='space-y-4 text-center'
                >
                    <h1 className='text-3xl font-bold text-white'>
                        Ready to Transform Your Workflow?
                    </h1>
                    <p className='text-white'>
                        Join thousands of professionals who are already using Digitools to work smarter.
                        <br />
                        Start your free trial today.
                    </p>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <div className='flex flex-wrap gap-5'>
                        <button className='btn bg-white rounded-full text-purple-500'>
                            Explore Products
                        </button>
                        <button className='btn btn-outline rounded-full border-white text-white hover:text-purple-500'>
                            View Pricing
                        </button>
                    </div>
                    <p className='text-white'>
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>

            {/* Part - 2 */}
            <div className='bg-[#101727] pt-30 px-20 md:px-50'>
                {/* Grid */}
                <div className='
                    grid md:grid-cols-3 lg:grid-cols-5 w-10/12m
                    mx-auto gap-12 pb-20
                '>
                    {/* Div 1 */}
                    <div className='space-y-4'>
                        <a className="
                            text-2xl font-bold
                            mb-2
                            bg-gradient-to-r
                            from-[#4F39F6]
                            to-[#9514FA]
                            bg-clip-text
                            text-transparent
                        ">
                            DigiTools
                        </a>
                        <p className='text-white text-sm mt-4'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>
                    {/* Div 2 */}
                    <div className='space-y-4'>
                        <h1 className='text-xl text-white'>
                            Product
                        </h1>
                        <ul className='text-white space-y-4'>
                            <li>
                               Features 
                            </li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    {/* Div 3 */}
                    <div className='space-y-4'>
                        <h1 className='text-xl text-white'>
                            Company
                        </h1>
                        <ul className='text-white space-y-4'>
                            <li>
                               About 
                            </li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    {/* Div 4 */}
                    <div className='space-y-4'>
                        <h1 className='text-xl text-white'>
                            Resources
                        </h1>
                        <ul className='text-white space-y-4'>
                            <li>
                               Documentation 
                            </li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {/* Div 5 */}
                    <div className='space-y-4'>
                        <h1 className='text-xl text-white'>
                            Social Links
                        </h1>
                        <div className='flex gap-3'>
                            <a href="">
                                <AiFillInstagram 
                                size={40}
                                className='bg-white px-2.5 py-2.5 rounded-full'
                                />
                            </a>
                            <a href="">
                                <FaFacebookSquare 
                                size={40}
                                className='bg-white px-2.5 py-2.5 rounded-full'
                            />
                            </a>
                            <a href="">
                                <FaXTwitter 
                                size={40}
                                className='bg-white px-2.5 py-2.5 rounded-full'
                            />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className='text-gray-500'/>
                <div className='py-7 flex justify-between'>
                    <p className='text-gray-500 text-sm'>
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <ul className='text-gray-500 flex flex-wrap gap-5 text-sm'>
                        <li><a href="">
                                Privacy Policy
                            </a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;