import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log('user in private router ',location)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if (user) {
        return children;
    }


    return <Navigate state={{ from: location }} to='/login' ></Navigate>
    
};

export default PrivateRoutes;