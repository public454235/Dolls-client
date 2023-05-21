
import { useLoaderData } from 'react-router-dom';
const Details = () => {
    const detail = useLoaderData()
    console.log(detail)
    const {name, seller_name, category, Price, Rating, quantity, photo } = detail;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse p-28">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h3 className="text-3xl font-bold">Category: {category}</h3>
                        <p className="mt-2">name: {name}</p>
                        <p className="py-2">seller: {seller_name}</p>
                        <p className="">Price: {Price}</p>
                        <p className="mt-2">Price: {Price}</p>
                        <p className="py-2">Rating: {Rating}</p>
                        <p className="">Details: {quantity}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;