import { useEffect, useState } from "react";
import axiosPrivate from "../axiosPrivate/axiosPrivate";

const useToken = (authUser) => {
    const [token,setToken] = useState('')
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        if(authUser){
            setLoading(true)
            const user = {email:authUser?.email}
            const url = `https://assignment-12-manufacturer-company-server-site-rayhanmujumdar.vercel.app/user/${user.email}`
            axiosPrivate.put(url,user)
            .then(res => {
                const {token} = res?.data
                localStorage.setItem('accessToken',token)
                setToken(token)
                setLoading(false)
            })
        }
    },[authUser])
    return [token,loading]
};

export default useToken;