import SearchBlock from "./SearchBlock/SearchBlock";
import style from "./Header.module.css";
import {useContext} from "react";
import {tokenContext} from "../../context/tokenContext";

export default function Header () {
    // const token = useContext(tokenContext);
    // console.debug(token);
    return (
        <div className={style.header}>
            <div>Header</div>
            <SearchBlock />
        </div>
    )
}
