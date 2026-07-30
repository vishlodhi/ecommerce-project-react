import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='border-t pt-10 text-center text-2xl'>
        <Title text1={'Contact'} text2={'US'} />
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-10 my-10 mb-20'>
        <img src={assets.contact_img} className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center items-start text-sm'>
          <p className='font-medium'>Our Store</p>
          <p className='text-gray-600'>
            Noida Sector 62 <br />
            Uttar Pradesh 201301
          </p>
          <p className='text-gray-600'>
            Tel: +91 9876543210 <br />
            Email: support@forever.com
          </p>
          <p className='font-medium'>Careers at Forever</p>
          <p className='text-gray-600'>
            Learn more about our teams and explore exciting opportunities to grow with us.
          </p>
          <button className=' border border-gray-600 px-8 py-2.5 my-4 hover:bg-black hover:text-white hover:border-black transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <br />
      <NewsLetterBox />
      
    </div>
  )
}

export default Contact