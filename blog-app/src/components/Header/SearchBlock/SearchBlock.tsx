import style from "./SearchBlock.module.css";
import UserBlock from "./UserBlock/UserBlock";
import {useUserData} from "../../../hooks/useUserData";

export default function SearchBlock () {
    const { user, status } = useUserData();
    return (
        <div className={style.searchBlock}>
            <UserBlock avatarSrc={user.iconImg} userName={user.name} userStatus={status} />
        </div>
    )
}
