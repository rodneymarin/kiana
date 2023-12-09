import "./products.css";
import ProductList from "./productList";
import data from "./data.json";

const Products = () => {
    //const items = data.products;
    return (
        <section id="section-products">
            <div className="container">
                <ProductList cover="true" line="com" showButton="true"/>
            </div>
        </section>
    )
};

export default Products;