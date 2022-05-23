import { useEffect, useState } from "react";
import axiosPrivate from "../axiosPrivate/axiosPrivate";

const useToken = (authUser) => {
    const [token,setToken] = useState('')
    useEffect(() => {
        if(authUser){
            const user = {email:authUser?.email}
            const url = `http://localhost:5000/user/${user.email}`
            axiosPrivate.put(url,user)
            .then(res => {
                const {token} = res?.data
                localStorage.setItem('accessToken',token)
                setToken(token)
            })
        }
    },[authUser])
    return [token]
};

export default useToken;