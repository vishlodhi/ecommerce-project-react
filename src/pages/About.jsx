import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'} />
      </div>
      <div className='mt-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-8 md:w-2/4 text-gray-600'>
          <p>Welcome to our online shopping platform, where quality meets convenience. We are dedicated to providing a seamless shopping experience with a wide range of products designed to match your lifestyle and needs.</p>
          <p>Our goal is to make online shopping simple, reliable, and enjoyable. From carefully selected products to a smooth checkout experience, we focus on delivering value, quality, and customer satisfaction at every step.</p>
          <b className='text-gray-600'>Our Mission</b>
          <p>Our mission is to create a simple, fast, and reliable online shopping experience by providing quality products, user-friendly services, and customer satisfaction. We aim to make shopping more convenient and accessible while continuously improving our platform with modern technology and innovation.</p>
        </div>
      </div>
      <div className='text-2xl py-6'>
        < Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row mb-20 text-sm'>

      </div>

    </div>


  )
}

export default About