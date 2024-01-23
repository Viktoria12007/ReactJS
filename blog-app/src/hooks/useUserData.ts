import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData, userData, userStatus} from "../features/user/userSlice";
import {tokenValue} from "../features/token/tokenSlice";

export function useUserData() {
    const dispatch = useDispatch();
    const user = useSelector(userData);
    const status = useSelector(userStatus);
    const token = useSelector(tokenValue);
    useEffect(() => {
        if (token) {
            dispatch(fetchUserData(token));
        }
    }, [token])
    return {
        user,
        status,
    };
}
