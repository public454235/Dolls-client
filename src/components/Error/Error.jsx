import { Link } from "react-router-dom";
import error from "../../assets/gallery/error.png"

const Error = () => {
    return (
        <div className="text-center">
            <img src={error} alt="" />
            <Link to='/'><button>Go To Home</button></Link>
        </div>
    );
};

export default Error;