import {  useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useGuide = () => {
    const {user}= useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: isGuide}= useQuery({
        queryKey: [user?.email, 'isGuide'],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/users/guide/${user.email}`)
            console.log(res.data);
            return res.data?.guide;
            
        }
    })
    return [isGuide]
};

export default useGuide;