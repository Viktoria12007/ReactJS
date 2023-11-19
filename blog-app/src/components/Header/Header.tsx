import UserBlock from "./SearchBlock/UserBlock/UserBlock";
import style from "./Header.module.css";

export default function Header () {
    return (
        <div className={style.header}>
            <div>Header</div>
            <UserBlock/>
        </div>
    )
}
