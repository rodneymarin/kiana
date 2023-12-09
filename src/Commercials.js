import ProductList from "./products/productList";
import "./products/products.css";

const Commercials = () => {
    return (  
        <section id="section-products">
            <div className="container">
                <div className="page-title bg-pattern">
                    <h1 >Productos Comerciales</h1>
                </div>
                <ProductList cover="false" line="com" showButton="false" />
            </div>
        </section>
    );
}
 
export default Commercials;