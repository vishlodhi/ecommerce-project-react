
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className='flex items-center py-5 px-[4%] justify-between'>
            <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
            <button className='bg-gray-600 text-white px-5 py-3 sm:px-8 sm:py-3 text-xs sm:text-sm rounded-full' >LogOut</button>
        </div>
    )
}

export default Navbar