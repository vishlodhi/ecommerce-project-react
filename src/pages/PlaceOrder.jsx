import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-5'>
          < Title text1={'Enter'} text2={'Address'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="text" placeholder='FirstName' />
          <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="text" placeholder='LastName' />
        </div>
        <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="email" placeholder='Email' />
        <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="text" placeholder='Street Name' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="number" placeholder='PinCode' />
          <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded px-1.5 py-1.5 w-full' type="number" placeholder='Phone' />

      </div>
      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          < CartTotal />
        </div>
        <div className='mt-14 text-xl'>
          < Title text1={'Payment'} text2={'Method'} />
          {/*  Payment Method Selection */}
          <div className='flex gap-4 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center border gap-3 p-3 px-4 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''} `}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center border gap-3 p-3 px-4 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''} `}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center border gap-3 p-3 px-4 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''} `}></p>
              <p className='text-sm font-medium text-gray-500 mx-4' >Cash On Delivery</p>
            </div>
          </div>
        </div>
        <div className='mt-8 text-end w-full'>
          <button onClick={()=> navigate('/orders') } className='border text-sm font-bold rounded px-14 py-3 bg-black text-white' >Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder