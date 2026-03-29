import { ToastContainer } from 'react-toastify'
import './App.css'
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './components/HomePage/Navbar';
import Banner from './components/HomePage/Banner';

function App() {

  return (
    <>
    <div className='bg-base-100 shadow-sm'>
      <Navbar/>
    </div>
    <Banner/>
    {/* Toastify */}
    <ToastContainer />
    </>
  )
}

export default App
