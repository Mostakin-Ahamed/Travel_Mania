import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user , loading} = useContext(AuthContext)
    if(loading){
       return  <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return (
       <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRoute;