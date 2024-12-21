import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const PublicRoute = ({children}) => {
    const {user,authLoading,authError} = useAuth()
    const location = useLocation()

   if(authError) <Navigate to={"/signup"}/>
   
    if(authLoading){
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    } 

    if(!user) {
        return children
    }


    return <Navigate to={location?.state ? location?.state : "/"}/>
};

export default PublicRoute;