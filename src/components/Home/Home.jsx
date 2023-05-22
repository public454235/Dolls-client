import useTitle from "../../hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <About></About>
            <Events></Events>
        </div>
    );
};

export default Home;