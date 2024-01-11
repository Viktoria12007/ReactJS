import SearchBlock from "./SearchBlock/SearchBlock";
import style from "./Header.module.css";

export default function Header () {
    return (
        <div className={style.header}>
            <div>Header</div>
            <SearchBlock />
        </div>
    )
}
