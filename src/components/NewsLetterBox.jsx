import React from 'react'

const NewsLetterBox = () => {
const onSubmitHandler = (event)=>{
    event.preventDefault();
}

    return (
        <div className='text-center'>
            <p className='text-2xl text-gray-800'>
                Subscribe Now & 20% off
            </p>
            <p className='text-gray-800 mt-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad maxime commodi sit accusantium asperiores vitae?
            </p>
            <form  onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='flex-1 outline-none' type="email" name="email" placeholder='Enter your Email' required />
                <button type='submit' className='bg-black text-white px-8 py-4'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetterBox