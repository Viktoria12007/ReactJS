import style from './CommentForm.module.css';
import {FormEvent, useRef} from "react";
import Icon from "../Icons/components/Icon";
import * as React from "react";
import {useSelector} from "react-redux";
import {userData} from "../../features/user/userSlice";

export function CommentFormUncontrol() {
    const { name } = useSelector(userData);
    const commentRef = useRef<HTMLTextAreaElement>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(commentRef.current?.value);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <textarea ref={commentRef} className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` } />
            <div className={style.wrap}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon1" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon2" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon3" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon4" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon5" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon6" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon7" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon8" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon9" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon10" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon11" size={20} />
                        </button>
                    </li>
                    <li className={style.item}>
                        <button>
                            <Icon name="commentFormIcon12" size={20} />
                        </button>
                    </li>
                </ul>
                <button type="submit" className={style.button}>Комментировать</button>
            </div>
        </form>
    );
}
