import { Link } from "react-router-dom";


const GirlCard = ({girlDoll}) => {

    const { _id, Picture, name, price, Rating } = girlDoll
    return (
        <div>
            <div className=" text-center shadow-2xl space-y-4 p-12">
                < img className="h-[300px] mx-auto" src={Picture} alt="Drink" />
                <h2 className="font-bold text-3xl">Name: {name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {Rating}</p>
                <Link to={`/girldoll/${_id}`}><button className="btn btn-secondary mt-3">View Details</button></Link>
            </div>

        </div>
    );
};

export default GirlCard;