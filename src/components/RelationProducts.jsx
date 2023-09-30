import ProductCard from "./ProductCard";

const RelationProducts = () => {
    return (
        <div>
            <div className="mt-10 mb-5">
                <h1 className="text-right text-2xl font-bold mb-3">محصولات مرتبط</h1>
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}

export default RelationProducts;