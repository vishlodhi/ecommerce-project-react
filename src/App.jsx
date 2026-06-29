
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

const App = () => {
  return (
<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
  <Navbar />
   < SearchBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/collection' element={<Collection />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/login' element={<Login />} />
  <Route path='/product/:productId' element={<Product />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='/orders' element={<Orders />} />
  <Route path='/place-order' element={<PlaceOrder />} />
</Routes>
<Footer />
</div>
  )
}

export default App