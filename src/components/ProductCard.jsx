import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = () => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
            <figure><img src="/images/product/1.webp" alt="Shoes" /></figure>
            <div className="card-body text-right">
                <Link to="product/1"><h2 className="text-xl font-bold">عنوان محصول</h2></Link>
                <p>توضیحات محصول</p>
                <div className="card-actions justify-between">
                    <AddToCartBtn productId={1}/>
                    <button className="btn">
                        523000 تومان
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;