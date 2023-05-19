import doll1 from "../../assets/gallery/doll27.jpg"
import doll2 from "../../assets/gallery/doll28.jpg"
import doll3 from "../../assets/gallery/doll29.jpg"
const Gallery = () => {
    return (

        <div >
            <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-purple-600">Gallery</h2>
                <p>Cupidatat non proident sunt culpa qui officia deserunt mollit anim idest laborum</p>
            </div>
            <div className=" gap-10 mt-12 grid grid-cols-1 lg:grid-cols-3 ">
                <div className="carousel-item shadow-2xl">
                    <img className="h-[300px]" src={doll1} alt="Drink" />
                </div>
                <div className="carousel-item shadow-2xl">
                    <img className="h-[300px] rounded" src={doll2} alt="Drink" />
                </div>
                <div className="carousel-item shadow-2xl">
                    <img className="h-[300px] rounded" src={doll3} alt="Drink" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;