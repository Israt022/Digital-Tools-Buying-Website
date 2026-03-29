import React from 'react';

const State = () => {
    return (
        <div className='
            bg-gradient-to-r
            from-[#4F39F6]
            to-[#9514FA]
            w-full 
            flex flex-col md:flex-row
            items-center justify-center
            py-15 mx-auto
            gap-8 md:gap-0
        '>
            {/* D1 */}
            <div className='px-30 flex flex-col items-center space-y-2'>
                <h1 className='text-5xl font-bold text-white'>50K+</h1>
                <p className='font-medium text-white text-lg'>Active Users</p>
            </div>
            <div className='h-20 border border-white/50 hidden md:block'></div>
            {/* D2 */}
            <div className='px-30 flex flex-col items-center space-y-2'>
                <h1 className='text-5xl font-bold text-white'>200+</h1>
                <p className='font-medium text-white text-lg'>Premium Tools</p>
            </div>
            <div className='h-20 border border-white/50 hidden md:block'>

            </div>
            {/* D3 */}
            <div className='px-30 flex flex-col items-center space-y-2'>
                <h1 className='text-5xl font-bold text-white'>4.9</h1>
                <p className='font-light text-white text-lg'>Rating</p>
            </div>
        </div>
    );
};

export default State;