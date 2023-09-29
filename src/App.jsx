import Header from './components/layouts/header'
import Footer from './components/layouts/Footer'
import Slider from './components/Slider'
import Categories from './components/Categories'

function App() {

  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <div className='w-full max-w-5xl'>
        <Header />
        <Slider />
        <Categories />
      </div>
      <Footer />
    </div>
  )
}

export default App
