import style from './Comment.module.css';
import {useState} from "react";
import {CommentFormControl} from "../CommentForm/CommentFormControl";

export function Comment ({comment}) {
    const [isOpenCommentForm, setIsOpenCommentForm] = useState(false);
    return (
          <li className={style.item} key={self.crypto.randomUUID()}>
              <div>{comment.data.author}</div>
              <div>{comment.data.body}</div>
              <button className={style.buttonAnswer} onClick={(e) => {
                  e.stopPropagation();
                  setIsOpenCommentForm(true);
              }}>Ответить</button>
              { isOpenCommentForm && (<CommentFormControl/>) }
          </li>
    );
}
