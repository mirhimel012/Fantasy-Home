import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";

const PrivateDetails = ({children}) => {
    const {user} = useAuth();
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateDetails;