import React from 'react';
import { FaOpencart } from 'react-icons/fa';
import CartCard from './CartCard';
import { FaFileAlt, FaGlobe, FaIcons, FaPalette, FaPenNib, FaRobot } from 'react-icons/fa';
import { toast } from 'react-toastify';

const iconMap = {
    FaPenNib : FaPenNib,
    FaPalette : FaPalette,
    FaIcons : FaIcons,
    FaRobot : FaRobot,
    FaFileAlt : FaFileAlt,
    FaGlobe : FaGlobe
};

const Cart = ({cart,setCart}) => {
    // console.log(cart);
    const totalPrice = cart.reduce((sum,item) => sum + item.price,0);
    const handleCheak = () => {
        setCart([]);
        toast.success('Order Confirm!')
    }
    return (
        <div className='
            bg-base-100 
            border border-gray-500/2 shadow-sm
            p-10 rounded-lg w-[80%] mx-auto
        '>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            <div className='gap-5'>
                {
                cart.length === 0 ? <>
                    <div className='text-center space-y-5 py-15'>
                        <FaOpencart size={30} className='mx-auto'/>
                        <p>Your cart is empty!</p>  
                    </div>
                </> :(
                    <>
                        {cart.map(item => {
                            const Icon = iconMap[item.icon];
                            return <CartCard item={item} icon={Icon} cart={cart} setCart={setCart}/>
                        })}
                        <div className='flex justify-between'>
                            <p className='text-[#627382]'>Total:</p>
                            <p className='text-2xl font-bold'>${totalPrice}</p>
                        </div>
                        <button className='
                            mt-3
                                btn w-full rounded-full
                                bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white
                            '
                            onClick={handleCheak}
                        >
                            Proceed to Checkout
                        </button>
                    </>
                )
                
            }
            </div>
        </div>
    );
};

export default Cart;