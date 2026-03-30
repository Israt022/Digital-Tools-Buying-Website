import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ProductCard = ({product,icon : Icon,cart,setCart}) => {
    const [isSelected,setIsSelected] = useState(false)
    const handleButton = () =>{
        const isFind = cart.find(item => item.id === product.id);
        if(isFind){
            toast.error('This Product already added!');
            return
        }
        setIsSelected(true);
        setCart([...cart,product])
        toast.success('Product Added to your cart')
    }
    // console.log(product);
    return (
        <div className='bg-base-100  
            shadow-sm 
            border border-gray-500/20
            hover:scale-105 transition duration-200
            hover:shadow-indigo-600/30
            cursor-pointer
            p-5 rounded-lg space-y-4
            '>
            <div className='flex justify-between relative'>
                <div className=' bg-white border my-3 border-gray-400 p-4 rounded-full'>
                    <Icon className='
                        text-3xl font-bold
                        bg-clip-text
                        text-primary
                    '/>
                </div>
                <p
                    className={` absolute top-0 right-0
                        capitalize px-3 py-2 rounded-full flex items-center text-center
                        ${product.tagType === 'popular' ? 
                            'bg-[#E1E7FF] text-purple-500' 
                            : product.tagType === 'best seller' 
                            ? 'bg-amber-400/30 text-amber-500 rounded-full' :
                            product.tagType === 'new' ? 'bg-[#DBFCE7] text-[#0A883E]' : 'bg-[#E1E7FF]'
                        }
                        `}
                >
                    <span>
                    {product.tagType}
                    </span>
                </p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-bold'>
                    {product.name}
                </h1>
                <p className='text-[#627382]'>
                    {product.description}
                </p>
                <p>
                    <span className='text-2xl font-bold'>${product.price}</span>
                    <span className='text-[#627382] capitalize'>/{product.period}</span>
                </p>
            </div>
            <ul>
                {product.features.map((f,i)=>(
                    <li key={i} className='text-[#627382] text-base flex gap-2'>
                       <IoCheckmark size={20} className='text-green-500 font-light'/> {f}
                    </li>
                ))}
            </ul>
            <button 
                className={`btn w-full rounded-full
                    ${isSelected ?
                        'bg-green-500 text-white' : 
                        'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'}
                    
                `}
                onClick={handleButton}
            >
                {isSelected ? (<>
                    <IoCheckmark/> Add to Cart
                    </>) : 'Buy Now'}
                 
            </button>
        </div>
    );
};

export default ProductCard;