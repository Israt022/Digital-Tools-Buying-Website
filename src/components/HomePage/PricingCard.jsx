import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const PricingCard = () => {
    const getData = [
        {
            id : 1,
            title : 'Starter',
            dec : 'Perfect for getting started',
            price : '0',
            period : 'month',
            feature : [
                'Access to 10 free tools',
                'Basic templates',
                'Community support',
                '1 project per month'
            ],
            status : 'new',
            button : 'Get Started Free'
        },
        {
            id : 2,
            title : 'Pro',
            dec : 'Best for professionals',
            price : '29',
            period : 'month',
            feature : [
                'Access to all premium tools',
                'Unlimited templates',
                'Priority support',
                'Unlimited projects',
                'Cloud sync',
                'Advanced analytics'
            ],
            status : 'Most Popular',
            button : 'Start Pro Trial'
        },
        {
            id : 3,
            title : 'Enterprise',
            dec : 'For teams and businesses',
            price : '99',
            period : 'month',
            feature : [
                'Everything in Pro',
                'Team collaboration',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'Custom branding'
            ],
            status : 'new',
            button : 'Contact Sales'
        },
    ]
    return (
        <div className='py-30 w-[80%] mx-auto'>
             {/* Heading */}
            <div className='text-center space-y-4'>
                <h1 className='text-3xl font-bold'>
                    Simple, Transparent Pricing
                </h1>
                <p className='text-base text-[#627382]'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>
            {/* Cards */}
            <div className='grid md:grid-cols-2 mt-10 lg:grid-cols-3 gap-7'>
                {
                    getData.map(item => (
                        <div className={`
                            ${item.status === 'Most Popular' ?
                                'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white scale-105' : 
                                'bg-[#F2F2F2]  shadow-sm border border-gray-500/20'
                            }
                            hover:scale-105 transition duration-200
                            hover:shadow-indigo-600/30
                            cursor-pointer
                            p-5 rounded-lg space-y-6
                            relative
                        `}>
                            {item.status === 'Most Popular' ? 
                            <p className='text-[#BB4D00] bg-[#FEF3C6] px-3 py-1.5 rounded-full absolute -top-3 left-1/2 -translate-x-1/2'>
                                {item.status}
                            </p> : 
                            ''}
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold'>
                                    {item.title}
                                </h1>
                                <p className={`
                                        ${item.status === 'Most Popular' ?
                                            'text-white' :
                                            'text-[#627382]'
                                        }
                                    `}>
                                    {item.dec}
                                </p>
                            </div>
                            <p>
                                <span className='text-2xl font-bold'>
                                    ${item.price}
                                </span>
                                <span className={`capitalize
                                        ${item.status === 'Most Popular' ?
                                            'text-white' :
                                            'text-[#627382]'
                                        }
                                    `}>/
                                    {item.period}
                                </span>
                            </p>
                            <ul>
                                {item.feature.map((f,i)=>(
                                    <li key={i}
                                        className={`
                                        ${item.status === 'Most Popular' ?
                                            'text-white' :
                                            'text-[#627382]'
                                        }
                                        text-base flex gap-2
                                    `}
                                    >
                                        <IoCheckmark size={20} className={`
                                        ${item.status === 'Most Popular' ?
                                            'text-white' :
                                            'text-green-500 font-light'
                                        }
                                        text-base flex gap-2
                                    `}/> {f}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className={`btn w-full rounded-full
                                    ${item.status === 'Most Popular' ?
                                        'text-purple-700' : 
                                        'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'}
                                    
                                `}
                            >{item.button}    
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PricingCard;