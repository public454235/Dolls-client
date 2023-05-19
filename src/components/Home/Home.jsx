import About from "../About/About";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <Events></Events>
        </div>
    );
};

export default Home;