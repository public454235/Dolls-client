
import { useLoaderData } from 'react-router-dom';

const BarbieDetails = () => {
    const barbieDetails = useLoaderData()
    const { Picture, category, Rating, details, price } = barbieDetails
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse p-28">
                    <img src={Picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h3 className="text-5xl font-bold">Category: {category}</h3>
                        <p className="mt-2">Price: {price}</p>
                        <p className="py-2">Rating: {Rating}</p>
                        <p className="">Details: {details}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarbieDetails;