import ProductList from "./products/productList";
import "./products/products.css";

const Industrials = () => {
    return (
        <section id="section-products">
            <div className="container">
                <div className="page-title bg-pattern">
                    <h1 >Productos Insdustriales</h1>
                </div>
                <ProductList cover="false" line="ind" showButton="false" />
            </div>
        </section>
    );
}
 
export default Industrials;