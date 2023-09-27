import Header from './components/layouts/header'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <div className='w-full max-w-7xl'>
        <Header />
        <h1 className='text-red-500'>hello world</h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
