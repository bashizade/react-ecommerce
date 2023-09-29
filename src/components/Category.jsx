const Category = ({image,title}) => {
    return ( 
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="text-center">{title}</h1>
            </div>
        </div>
     );
}
 
export default Category;