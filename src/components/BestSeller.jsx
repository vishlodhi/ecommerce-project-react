
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestSeller));
        setBestSeller(bestProduct.slice(0, 5));
    }, [products])


    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'Best'} text2={'Seller'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, esse?
            </p>

             </div>

        </div>
             )
}

export default BestSeller