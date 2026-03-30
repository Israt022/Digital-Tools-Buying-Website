import { ToastContainer } from 'react-toastify'
import './App.css'
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './components/HomePage/Navbar';
import Banner from './components/HomePage/Banner';
import State from './components/HomePage/State';
import { Suspense, useState } from 'react';
import Products from './components/ProductData/Products';
import GetStarted from './components/HomePage/GetStarted';
import PricingCard from './components/HomePage/PricingCard';

const fetchProductData = async () =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const productDataPromise = fetchProductData();
  const [cart,setCart] = useState([])

  return (
    <>
    <div className='bg-base-100 shadow-sm'>
      <Navbar cart={cart}/>
    </div>
    <Banner/>
    <State/>
    <Suspense fallback={<span className="$$loading $$loading-spinner text-primary"></span>}>
      <Products productDataPromise={productDataPromise} cart={cart} setCart={setCart}/>
    </Suspense>

    <GetStarted/>
    <PricingCard/>
    {/* Toastify */}
    <ToastContainer 
      position="top-center"
    />
    </>
  )
}

export default App
