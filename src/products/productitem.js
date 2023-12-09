import "./products.css";
import { Link } from 'react-router-dom';
import {useEffect} from 'react';

const ProductItem = ({item, showButton}) => {
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({top: 0, left: 0});
      }, []);
    return (
        <div className='product-item'>
            <img className='product-img' src={item.img} alt={item.title}/>
            <apan className="product-desc">{item.title}</apan>
            {showButton==="true"? (
                <Link to="/comerciales" className="hoverbutton button-border">Ver más</Link>
            ):(
                <></>
            )}
            
        </div>
    );
};

export default ProductItem;