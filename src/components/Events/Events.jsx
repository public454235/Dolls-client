

const Events = () => {
    return (
        <div>
            <div className="text-center mt-12 space-y-3 mb-6">
                <div className="divider font-bold text-orange-700">Events</div>
                <h2 className="text-4xl font-bold text-blue-950">Our Events</h2>
            </div>
            <div className="bg-base-200 grid grid-cols-1 lg:grid-cols-2 gap-5" data-aos="fade-down-right">
                <div className="hero min-h-6 " style={{ backgroundImage: `url("https://i.ibb.co/SXkrxkb/doll35.jpg")` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold text-black">Numbers Matching</h1>
                            <p className="mb-5 text-black">Lorem ipsum dolor amet consectur pisicelit sed eiusmod tempor indie</p>
                            <button className="btn btn-outline btn-warning">ENROL NOW</button>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-6 " style={{ backgroundImage: `url("https://i.ibb.co/crVNyyt/doll34.jpg")` }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-4xl font-bold text-black">Paper Plates Art.</h1>
                            <p className="mb-5 text-black">Lorem ipsum dolor amet consectur pisicelit sed eiusmod tempor indie</p>
                            <button className="btn btn-outline btn-warning">ENROL NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;