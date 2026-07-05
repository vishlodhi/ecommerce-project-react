import { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const RelatedProducts = ({category, subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
   

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy =  productsCopy.filter((item)=> category === item.category);
            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);
            console.log(productsCopy.slice(0,5));
        }
    }, [products, category, subCategory])
    return (
        <div className='mt-24'>
            <div className='text-3xl text:center py-2'>
                <Title text1={'Related'} text2={'Products'} />
                <div className='flex'>
                    
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts