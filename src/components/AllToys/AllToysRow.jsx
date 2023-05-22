import { Link } from "react-router-dom"

const AllToysRow = ({ allToy }) => {


    console.log(allToy)
    const { _id, name, seller_name, category, Price, Rating, quantity, photo } = allToy;
    return (
        <tr>
            
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl h-24">
                         <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {seller_name}
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${Price}</td>
            <td>{Rating}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/bookings/${_id}`}><button className="btn btn-secondary" >View Details</button></Link>

            </td>

        </tr>
    );
};

export default AllToysRow;