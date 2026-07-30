import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'} />
      </div>
      <div className='mt-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About us" />
        <div className='flex flex-col justify-center gap-8 md:w-1/2 text-gray-600'>
          <p>Welcome to our online shopping platform, where quality meets convenience. We are dedicated to providing a seamless shopping experience with a wide range of products designed to match your lifestyle and needs.</p>
          <p>Our goal is to make online shopping simple, reliable, and enjoyable. From carefully selected products to a smooth checkout experience, we focus on delivering value, quality, and customer satisfaction at every step.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to create a simple, fast, and reliable online shopping experience by providing quality products, user-friendly services, and customer satisfaction. We aim to make shopping more convenient and accessible while continuously improving our platform with modern technology and innovation.</p>
        </div>
      </div>
      <div className='text-2xl py-6'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row mb-20 text-sm'>
        <div className="border border-gray-300 px-8 md:p-12 py-6 sm:py-20 flex flex-col gap-5 flex-1">
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>We are committed to offering products that meet high standards of quality and reliability. Every item is carefully selected to ensure durability, value, and customer satisfaction, giving you confidence with every purchase.</p>
        </div>
        <div className="border border-gray-300 px-8 md:p-12 py-6 sm:py-20 flex flex-col gap-5 flex-1">
          <b>Convenience :</b>
          <p className='text-gray-600'>We make online shopping simple, fast, and hassle-free. With an easy-to-use interface, secure checkout, and smooth browsing experience, you can find and order your favorite products in just a few clicks.</p>
        </div>
        <div className="border border-gray-300 px-8 md:p-12 py-6 sm:py-20 flex flex-col gap-5 flex-1">
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. We strive to provide prompt support, clear communication, and a seamless shopping experience to ensure your satisfaction at every step.</p>
        </div>

      </div>
      <NewsLetterBox />
    </div >


  )
}

export default About