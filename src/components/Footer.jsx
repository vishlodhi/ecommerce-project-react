import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-gray-700'>
        <div>
          <img src={assets.logo} className='w-32 mb-5' alt="" />
          <p className='w-full md:w-1/2' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, debitis illum nesciunt officiis molestiae omnis praesentium dignissimos dolorem ex incidunt facilis est iusto labore at a ratione esse, obcaecati asperiores?
          </p>
        </div>
        <div>
          <p className='text-2xl font-bold mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='font-medium text-xl mb-5'>Get in touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-9811887580</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='text-center text-sm py-5 mb-2'>Copyright @ 2026 - Forever.com - All Right Reserves. </p>
      </div>
    </div>
  )
}

export default Footer 