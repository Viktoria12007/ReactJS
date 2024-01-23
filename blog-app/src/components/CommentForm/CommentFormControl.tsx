import style from './CommentForm.module.css';
import {ChangeEvent, FormEvent} from "react";
import Icon from "../Icons/components/Icon";
import * as React from "react";
import {userData} from "../../features/user/userSlice";
import {useSelector} from "react-redux";

type Props = {
    value: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    onSubmit: (e: FormEvent) => void,
}

export function CommentFormControl({value, onChange, onSubmit}: Props) {
    const { name } = useSelector(userData);

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <textarea className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` } value={value} onChange={onChange}/>
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
