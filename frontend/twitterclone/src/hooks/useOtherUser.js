import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getOtherUsers } from "../redux/userSlice";


const useOtherUser = (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchOtherUser = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/otherUser/${id}`,{
                    withCredentials:true
                });
                console.log(res);
                dispatch(getOtherUsers(res.data.otherUsers));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUser();
    },[id]);
};
export default useOtherUser;