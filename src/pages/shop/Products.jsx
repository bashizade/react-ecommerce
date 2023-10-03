import ProductCard from "../../components/ProductCard";
import {CheckBox, Input} from "../../components/Form";

const Products = () => {
    return (
        <div className="flex space-x-4">
            <div className="w-full grid grid-cols-3 gap-5">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <div className=" col-span-3 flex justify-center mt-5">
                    <div className="join">
                        <button className="join-item btn">1</button>
                        <button className="join-item btn btn-active">2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                    </div>
                </div>
            </div>
            <div className=" w-80">
                <div className="w-full bg-base-200 p-2 rounded-xl mb-5">
                    <Input type={"text"} placeholder={"نام کالا را وارد کنید"} />
                </div>
                <div className="w-full bg-base-200 p-2 rounded-xl mb-5">
                    <h1 className="text-right mb-2">محدوده قیمت</h1>
                    <input type="range" min="0" max="100" value="24" className="range" />
                </div>
                <div className="w-full bg-base-200 p-2 rounded-xl mb-5">
                    <h1 className="text-right mb-2">دسته بندی محصول را انتخاب کنید</h1>
                    <div className="bg-base-100 p-1 rounded-xl h-36 overflow-y-auto">
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                        <CheckBox label="نام دسته بندی" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;