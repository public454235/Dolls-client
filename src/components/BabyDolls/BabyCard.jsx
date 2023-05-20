import { Link } from "react-router-dom";


const BabyCard = ({ babyDoll }) => {
    const {_id, Picture, name, price, Rating } = babyDoll
    return (
        <div>
            <div className=" mx-auto shadow-2xl space-y-4 p-12">
                <img className="h-[300px]" src={Picture} alt="Drink" />
                <h2 className="font-bold text-3xl">Name: {name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {Rating}</p>
                <Link to={`/babyDetails/${_id}`}><button className="btn btn-secondary">View Details</button></Link>
            </div>
            
        </div>
    );
};

export default BabyCard;