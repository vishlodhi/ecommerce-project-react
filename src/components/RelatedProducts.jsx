import { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ currentProductId, category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            productsCopy = productsCopy.filter((item) => item._id !== currentProductId);

            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory,currentProductId])
    return (
        <div className='mt-24'>
            <div className='text-3xl text:center py-2'>
                <Title text1={'Related'} text2={'Products'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item) => (
                    < ProductItem
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts