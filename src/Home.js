import Hero from './hero/hero';
import Products from "./products/products";
import Mission from "./mission/mission";
import History from "./history/history";
import Contact from "./contact/contact";

const Home = () => {
    return (
        <>
            <Hero />
            <Products />
            <Mission />
            <History />
            <Contact />
        </>
    );
}
 
export default Home;