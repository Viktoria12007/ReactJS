import style from "./NotFound.module.css";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div className={style.errorLayout}>
            <div className={style.error}>
                <div>404 — страница не найдена!</div>
                <Link to="/posts">Вернуться назад</Link>
            </div>
        </div>
    )
}
