import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({item,icon:Icon,cart,setCart}) => {
    // console.log(item);
    const handleDelete = (item) => {
        const remove = cart.filter(i => i.id !== item.id)
        setCart(remove);
        toast.success('Product delete successfully!')
    }
    return (
        <div className='
            bg-[#F9FAFC] rounded-lg 
            flex justify-between
            p-5 mb-5 flex-wrap items-center
        '>
            <div className='flex items-center gap-5'>
                <div className=' bg-white border my-3 border-gray-400 p-4 rounded-full'>
                    <Icon className='
                        text-3xl font-bold
                        bg-clip-text
                        text-primary
                    '/>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{item.name}</h1>
                    <p className='text-base text-[#627382] font-medium'>${item.price}</p>
                </div>
            </div>
            <button 
            onClick={() => handleDelete(item)}
                className='btn 
                        btn-ghost text-red-500 
                        hover:btn-error hover:text-white'
            >
                Remove
            </button>
        </div>
    );
};

export default CartCard;