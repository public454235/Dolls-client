import dolls from "../../assets/doll4.jpg"
import dolls2 from "../../assets/doll2.jpg"
import dolls3 from "../../assets/doll1.jpg"


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:mb h-[500px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className=" absolute h-full items-center flex left-0 top-0 ">
                        <div className="lg:flex justify-between h-y-7 w-full lg:pl-64 pl-64">
                            <div className="text-black space-y-7 w-1/2">
                                <h2 className="text-6xl font-bold "><span className="text-blue-950">L.O.L. Surprise!</span><br /> Tweens Babysitting Beach</h2>
                                <p>Party with 20 Surprises Including Color Change Features <br />and 2 Dolls Great Gift for Kids Ages 4+, Multicolor</p>
                            </div>
                            <div className="w-1/2">
                                <img className="h-[300px]" src={dolls} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className=" absolute h-full items-center flex left-0 top-0 ">
                        <div className="lg:flex justify-between h-y-7 w-full lg:pl-64 pl-64">
                            <div className="text-black space-y-7 w-1/2">
                                <h2 className="text-6xl font-bold "><span className="text-purple-600">L.O.L. Surprise!</span><br /> Tweens Babysitting Beach</h2>
                                <p>Party with 20 Surprises Including Color Change Features <br />and 2 Dolls Great Gift for Kids Ages 4+, Multicolor</p>
                            </div>
                            <div className="w-1/2">
                                <img className="h-[300px]" src={dolls2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className=" absolute h-full items-center flex left-0 top-0 ">
                        <div className="lg:flex justify-between h-y-7 w-full lg:pl-64 pl-64">
                            <div className="text-black space-y-7 w-1/2">
                                <h2 className="text-6xl font-bold "><span className="text-purple-600">L.O.L. Surprise!</span><br /> Tweens Babysitting Beach</h2>
                                <p>Party with 20 Surprises Including Color Change Features <br />and 2 Dolls Great Gift for Kids Ages 4+, Multicolor</p>
                            </div>
                            <div className="w-1/2">
                                <img className="h-[300px]" src={dolls3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Banner;