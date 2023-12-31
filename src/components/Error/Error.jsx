import { Link } from "react-router-dom";
import error from "../../assets/gallery/error.png"

const Error = () => {
    return (
        <div>
            <img className="mx-auto" src={error} alt="" />
            <div className="text-center">
                <Link to='/'><button className="btn btn-primary">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default Error;