import dolls5 from "../../assets/gallery/doll32.jpg"
import dolls6 from "../../assets/gallery/doll36.jpg"

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row p-12">
                    <div className="w-1/2 relative" data-aos="flip-left">
                        <img src={dolls5} className=" rounded-lg shadow-2xl w-3/4" />
                        <img src={dolls6} className="border-white absolute  rounded-lg shadow-2xl w-1/2 top-1/2 border-8 right-5" />
                    </div>
                    <div className="w-1/2 space-y-4">
                        <h3 data-aos="fade-down" className="text-3xl text-orange-500 font-bold">About us</h3>
                        <h1 className="text-5xl text-blue-950 font-bold">Welcome to Kidko Kindergarten</h1>
                        <p className="py-6">Cupidatat non proident sunt culpa qui officia deserunt mollit anim idest laborum
                            Cupidatat non proident sunt culpa qui officia deserunt mollit anim idest laborum sed ut perspiciatis unde omnis iste natuserror sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                        <button className="btn btn-primary">CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;