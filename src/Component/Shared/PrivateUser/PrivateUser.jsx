import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase/firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../Loading/Loading";

const PrivateUser = ({children}) => {
    const [user,loading] = useAuthState(auth)
    const [admin,isLoading] = useAdmin(user)
    const location = useLocation()
    if(loading || isLoading){
        return <Loading className='text-black'></Loading>
    }
    if(admin){
        return <Navigate to='*' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateUser;