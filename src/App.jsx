import Header from './components/layouts/header'
import Footer from './components/layouts/Footer'
import Slider from './components/Slider'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'

function App() {

  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <Header />
      <div className='w-full max-w-5xl'>
        <Slider />
        <Categories />
        <div className='grid grid-cols-4 gap-3 bg-primary p-2 rounded-xl my-4'>
          <div className='col-span-4'>
            <h1 className='text-center text-white text-3xl font-semibold'>جدیدترین محصولات</h1>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
