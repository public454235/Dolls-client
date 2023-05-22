import { Link } from "react-router-dom";


const ShowToy = ({ show, handleDelete }) => {
    const { _id, name, seller_name, category, Price, Rating, quantity, photo } = show;

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
                <button onClick={() => handleDelete(_id)} className="btn btn-secondary" >Delete</button>
            </td>
            <td>
                <Link to={`/update/${_id}`}>
                    <button className="btn btn-secondary" >Update</button></Link>
            </td>

        </tr>
    );
};

export default ShowToy;