import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";

const PrivateDetails = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    if(!user){
        return <Navigate to='/login' state={location ?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateDetails;