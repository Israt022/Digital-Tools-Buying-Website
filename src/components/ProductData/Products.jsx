import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import { FaFileAlt, FaGlobe, FaIcons, FaPalette, FaPenNib, FaRobot } from 'react-icons/fa';
import Cart from '../Cart/Cart';

const Products = ({productDataPromise,cart,setCart}) => {
    const productData = use(productDataPromise);
    const [isActive,setIsActive] = useState('product');
    const iconMap = {
        FaPenNib : FaPenNib,
        FaPalette : FaPalette,
        FaIcons : FaIcons,
        FaRobot : FaRobot,
        FaFileAlt : FaFileAlt,
        FaGlobe : FaGlobe
    }
    // console.log(isActive);
    return (
        <div className='w-11/12 mx-auto my-28'>
            {/* Header */}
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-4xl font-bold'>
                    Premium Digital Tools
                </h1>
                <p className='text-[#627382] text-center'>
                    Choose from our curated collection of premium digital products designed
                    <br /> to boost your productivity and creativity.
                </p>
            </div>

            {/* Toggle */}
            <div className="tabs tabs-box bg-transparent mt-4 justify-center">
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className={`tab ${isActive === 'product' ? 
                        'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-4' : ''
                    }`} 
                    aria-label="Products" 
                    defaultChecked
                    onClick={()=> setIsActive('product')}
                />
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className={`tab ${isActive === 'cart' ? 
                        'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-7' : ''
                    }`} 
                    aria-label={`Cart(${cart.length})`}
                    onClick={()=> setIsActive('cart')}
                />
            </div>

            {/* Operation 2.0 */}
            <div >
                {
                    isActive === 'product' ? (
                    <div className='grid md:grid-cols-2 mt-10 lg:grid-cols-3 gap-7'>
                        {productData.map(product =>{ 
                            const Icon = iconMap[product.icon];
                            return(
                            <ProductCard 
                                key={product.id}
                                product={product}
                                icon={Icon}
                                cart={cart} 
                                setCart={setCart}
                            />
                        )})}
                    </div>) : <Cart  cart={cart} setCart={setCart}/>
                }
            </div>
        </div>
    );
};

export default Products;