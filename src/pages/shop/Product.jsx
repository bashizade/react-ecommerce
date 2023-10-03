import { useParams } from "react-router";
import AddToCartBtn from "../../components/AddToCartBtn";
import ProductCard from "../../components/ProductCard";
import RelationProducts from "../../components/RelationProducts";
import SetCountProduct from "../../components/SetCountProduct";

const product = () => {
    const { productId } = useParams();

    return (
        <>
            <div className="flex items-start space-x-4">
                <div className="w-full">
                    <div>
                        <h1 className="text-right text-3xl font-bold">عنوان محصول</h1>
                    </div>
                    <div>
                        <h1 className="text-right text-sm">دسته بندی : سیسی / سیسی / سیسیسی</h1>
                    </div>
                    <div className="mt-5">
                        <p className="text-right">توضیحات خلاصه محصول</p>
                    </div>
                    <div className="flex space-x-4">
                        <AddToCartBtn productId={1} />
                        <SetCountProduct />
                        <button type="button" className="btn">523000 تومان</button>
                    </div>
                </div>
                <div className="w-4/12 bg-base-200 p-1 rounded-xl">
                    <img src="../images/product/1.webp" alt="" className="w-full rounded-xl" />
                </div>
            </div>
            <div>
                <div className="mt-5">
                    <h1 className="text-right text-2xl font-bold">توضیحات محصول</h1>
                    <p className="text-right mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse vero obcaecati assumenda quis aperiam dolores, alias itaque perferendis sunt quos omnis sed iusto praesentium et quaerat aut ipsam architecto!</p>
                </div>
            </div>

            <RelationProducts />
        </>
    );
}

export default product;