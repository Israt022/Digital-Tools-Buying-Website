import React from 'react';
import badge from '../../assets/badge.png'
import banner from '../../assets/banner.png'
import play from '../../assets/Play.png'

const Banner = () => {
    return (
        <>
            <div className='
                flex flex-col md:flex-row 
                justify-center items-center
                w-[80%] mx-auto gap-8 
                my-20
                px-4 md:px-0
            '>
                {/* Left Side */}
                <div className='w-full md:w-11/12 space-y-8'>
                    <div className='space-y-4'>
                        <div className="
                            badge badge-soft 
                            rounded-full py-4 px-3
                            bg-[#E1E7FF]
                            border-none
                        ">
                            <img 
                                src={badge} alt="" 
                            />
                            <span className='
                                bg-gradient-to-r
                                from-[rgba(79,57,246,1)]
                                to-[rgba(149,20,250,1)]
                                bg-clip-text
                                text-transparent
                            '>
                                New: AI-Powered Tools Available
                            </span>
                        </div>
                        <h1 className='
                            text-5xl font-bold
                            flex flex-col
                            space-y-4
                        '>
                            <span>Supercharge Your</span> 
                            <span className='bg-gradient-to-r
                            from-[#4f39f6]
                            to-[#9514fa]
                            bg-clip-text
                            text-transparent pb-2'> Digital Workflow</span> 
                        </h1>
                        <p className='text-[#627382]'>
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <button className="
                            btn rounded-full
                            bg-gradient-to-r
                            from-[rgba(79,57,246,1)]
                            to-[rgba(149,20,250,1)]
                            text-white
                        ">
                            Explore Products
                        </button>
                        <button className="btn btn-outline 
                            rounded-full
                            border border-[#4f39f6]
                            bg-gradient-to-r
                            from-[#4f39f6]
                            to-[#9514fa]
                            bg-clip-text
                            text-transparent
                            hover:bg-gradient-to-r
                            hover:from-[#4f39f6]
                            hover:to-[#9514fa]
                            hover:text-white
                            hover:bg-clip-border
                        ">
                            <img src={play} alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>
                {/* Right Side */}
                <div className='w-full md:w-11/12 mx-auto'>
                    <div className="hover-3d">
                        {/* content */}
                        <figure className="w-[80%] mx-auto">
                            <img src={banner} alt="" className='
                                w-full h-auto md:w-125 
                                object-cover shadow-xl
                                hover-gallery cursor-pointer
                            '/>
                        </figure>
                        {/* 8 empty divs needed for the 3D effect */}
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Banner;