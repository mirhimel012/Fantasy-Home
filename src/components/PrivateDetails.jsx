import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";

const PrivateDetails = ({children}) => {
    const {user} = useAuth();
    if(!user){
        return <Login></Login>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateDetails;