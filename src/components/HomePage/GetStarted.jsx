import React from 'react';
import user from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const GetStarted = () => {
    const getData = [
        {
            id : 1,
            image : user,
            title : 'Create Account',
            des : 'Sign up for free in seconds. No credit card required to get started.' 
        },
        {
            id : 2,
            image : packageImg,
            title : 'Choose Products',
            des : 'Browse our catalog and select the tools that fit your needs.' 
        },
        {
            id : 3,
            image : rocket,
            title : 'Start Creating',
            des : 'Download and start using your premium tools immediately.' 
        },
    ]
    return (
        <div className='bg-[#F9FAFC] py-30'>
            {/* Heading */}
            <div className='text-center space-y-4'>
                <h1 className='text-3xl font-bold'>
                    Get Started in 3 Steps
                </h1>
                <p className='text-base text-[#627382]'>
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 
                    items-center justify-items-center gap-5
                    mt-10 w-[80%] mx-auto
                '>
                {
                    getData.map(item => (
                        <div className='
                            py-20 bg-white border border-[#F1F1F1] rounded-xl
                            flex flex-col items-center
                            space-y-4  relative
                            '>
                            <p className='
                                px-2.5 flex text-center
                                py-2 rounded-full
                                bg-gradient-to-r 
                                from-[#4F39F6] 
                                to-[#9514FA] 
                                text-white text-sm 
                                absolute 
                                top-5 right-5
                            '>0{item.id}</p>
                            <div className='px-5 py-5
                                    bg-gradient-to-r 
                                    from-[#4F39F6]/30  
                                    to-[#9514FA]/30 rounded-full flex justify-center
                                    items-center'> 
                                <img src={item.image}
                                alt="" className='
                                    object-contain
                                '/>
                            </div>
                            <h1 className='text-2xl font-bold'>
                                {item.title}
                            </h1>
                            <p className='w-80 mx-auto 
                                text-center text-[#627382] text-base 
                                px-8'>
                                {item.des}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default GetStarted;