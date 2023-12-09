import "./products.css";
import ProductItem from "./productitem";
import data from "./data.json";

const ProductList = ({ cover, line, showButton }) => {
    const items = data.products;
    return(
        <div className="product-list">
        {
            items.filter((item)=>((cover==="true") ? (item.cover==="true") && (item.line === line) : (item.line === line) ))
                .map((item) => (<ProductItem item={item} showButton={showButton} />))
        }
        </div>
    );
        
};

export default ProductList;