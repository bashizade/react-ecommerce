import Category from "./Category";

const Categories = () => {
    const categories = [
        { id: 1, url: "/images/category/1.webp", title: "کیف و کفش" },
        { id: 2, url: "/images/category/2.webp", title: "کیف و کفش" },
        { id: 3, url: "/images/category/3.webp", title: "کیف و کفش" },
        { id: 4, url: "/images/category/4.webp", title: "کیف و کفش" },
        { id: 5, url: "/images/category/5.webp", title: "کیف و کفش" },
        { id: 6, url: "/images/category/6.webp", title: "کیف و کفش" },
        { id: 7, url: "/images/category/7.webp", title: "کیف و کفش" },
        { id: 8, url: "/images/category/8.webp", title: "کیف و کفش" },
    ];
    return (
        <div className="grid grid-cols-6 gap-5 my-4">
            {categories.map(category => <Category key={category.id} image={category.url} title={category.title} />)}
        </div>
    );
}

export default Categories;