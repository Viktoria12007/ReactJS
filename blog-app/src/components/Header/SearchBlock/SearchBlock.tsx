import style from "./SearchBlock.module.css";
import UserBlock from "./UserBlock/UserBlock";
import {useUserData} from "../../../hooks/useUserData";
import {userContext} from "../../../context/userContext";
import {useContext} from "react";

// interface ISearchBlockProps {
//     token: string,
// }

export default function SearchBlock () {
    const { iconImg, name } = useContext(userContext);
    return (
        <div className={style.searchBlock}>
            <UserBlock avatarSrc={iconImg} username={name}/>
        </div>
    )
}
