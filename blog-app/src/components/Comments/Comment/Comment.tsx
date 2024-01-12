import style from './Comment.module.css';
import {useState} from "react";
import {CommentFormAnswer} from "../../CommentForm/CommentFormAnswer";

export function Comment ({comment}) {
    const [isOpenCommentForm, setIsOpenCommentForm] = useState(false);
    return (
        <li className={style.item}>
            <div>{comment.data.author}</div>
            <div>{comment.data.body}</div>
            <button className={style.buttonAnswer} onClick={(e) => {
                e.stopPropagation();
                setIsOpenCommentForm(true);
            }}>Ответить</button>
            { isOpenCommentForm && (<CommentFormAnswer/>) }
        </li>
    );
}
