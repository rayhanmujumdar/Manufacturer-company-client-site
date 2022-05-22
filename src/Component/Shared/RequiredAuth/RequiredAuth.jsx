import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import Loading from "../Loading/Loading";

const RequiredAuth = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default RequiredAuth;