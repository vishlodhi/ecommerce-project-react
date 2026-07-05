import React, { useContext, useEffect, useState } from 'react'
import { assets, products } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }

    })
  }
  useEffect(() => {
    fetchProductData();
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }, [products, productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* PRoduct Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col
           overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* Product Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-2 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>150</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-2xl font-medium'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item) => (
                <button onClick={() => setSize(item)} className={`size-14 border py-3 px-4 bg-gray-100 cursor-pointer ${item === size ? 'bg-gray-300' : 'border-gray-50'}`} key={item}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black py-3 px-8 text-white font-bold text-sm active:bg-gray-700'>Add to Cart</button>
          <hr className='mt-8 sm:w-3/4' />
          <div className='text:sm flex flex-col gap-1 mt-5 text-gray-500 '>
            <p>% Original Product.</p>
            <p>Easy Cash on Delivery Available.</p>
            <p>Easy return and exchange policy.</p>
          </div>
        </div>
      </div>
      {/* Discription and review systems */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='text-sm border py-3 px-5'>Description</b>
          <p className='text-sm border py-3 px-5'>Reviews(134)</p>
        </div>
        <div className='flex flex-col gap-5 px-5 py-3 text-sm text-gray-500'>
          <p>
            Crafted from premium 100% cotton, this T-shirt offers exceptional comfort, breathability, and long-lasting durability. Designed with a modern regular fit and soft fabric, it is perfect for everyday wear, office, travel, and casual outings.
          </p>
          <p className='mt-4 font-medium text-gray-700'>Key Features:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Premium 100% Cotton Fabric</li>
            <li>Soft & Breathable Material</li>
            <li>Regular Fit</li>
            <li>Durable Stitching</li>
            <li>Machine Washable</li>
            <li>Suitable for Everyday Wear</li>
          </ul>
        </div>
      </div>
      {/* Related Products */}
      <div>
        <RelatedProducts currentProductId={productData._id} category={productData.category} subCategory={productData.subCategory} />
      </div >
    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product