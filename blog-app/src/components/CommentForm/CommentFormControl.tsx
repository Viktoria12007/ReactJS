import style from './CommentForm.module.css';
import {ChangeEvent, FormEvent, useContext} from "react";
import {userContext} from "../../context/userContext";
import Icon from "../Icons/components/Icon";
import * as React from "react";
import {commentContext} from "../../context/commentContext";

export function CommentFormControl() {
    const { value, onChange } = useContext(commentContext);
    const { name } = useContext(userContext);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        onChange(e.target.value);
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <textarea className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` } value={value} onChange={handleChange}/>
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
