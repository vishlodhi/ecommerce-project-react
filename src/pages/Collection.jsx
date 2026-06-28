import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }


  const applyFilter = () => {
    
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }

  useEffect(() => {
    setFilterProducts(products);
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters</p>
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        {/* Catogory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-5 font-medium' >CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Men'} id="" className='w-3' onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Women'} id="" className='w-3' onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Kids'} id="" className='w-3' onChange={toggleCategory} />kids
            </p>
          </div>
        </div>
        {/* Sub Categories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm mb-5 font-medium' >SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Topwear'} id="" className='w-3' onChange={toggleSubCategory} />Summerwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Winterwear'} id="" className='w-3' onChange={toggleSubCategory} />WinterWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Bottomwear'} id="" className='w-3' onChange={toggleSubCategory} />BottomWear
            </p>
          </div>
        </div>
      </div>
      {/* Riigt Side */}
      <div className='flex-1'>
        <div className='flex justify-between mb-4 text:base sm:text-2xl'>
          <Title text1={'All'} text2={'Collections'} />
          {/* Product Sort */}
          <select name="" className='border border-gray-400 px-2 text:sm'>
            <option value="Relevant">Relevant</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              < ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection