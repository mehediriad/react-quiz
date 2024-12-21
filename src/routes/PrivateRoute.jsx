import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    // console.log(location);
    

    if(loading){
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    if(user){
        return children
    }

    return <Navigate to={`/login`} state={location?.pathname} replace/>
};

export default PrivateRoute;