import Slider from './../../components/Slider'
import Categories from './../../components/Categories'
import ProductCard from './../../components/ProductCard'

const Index = () => {
    return (
        <>
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
        </>
    );
}

export default Index;