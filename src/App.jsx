import Header from './components/layouts/header'
import Footer from './components/layouts/Footer'
import { Routes, Route } from "react-router-dom";

import Index from './pages/shop/Index';
import Product from './pages/shop/Product'
import Products from './pages/shop/Products';

function App() {

  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <Header />
      <div className='w-full max-w-5xl py-8'>
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="products" element={<Products />} />
        <Route path='product/:productId' element={<Product />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
