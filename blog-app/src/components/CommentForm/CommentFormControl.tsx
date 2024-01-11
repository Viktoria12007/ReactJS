import style from './CommentForm.module.css';
import {ChangeEvent, FormEvent, useContext, useEffect, useRef, useState} from "react";
import {userContext} from "../../context/userContext";
import Icon from "../Icons/components/Icon";
import * as React from "react";

export function CommentFormControl({value = null, onChange = null}) {
    if (!value && !onChange) {
        [value, onChange] = useState('');
    }
    const { name } = useContext(userContext);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        commentRef.current?.focus();
    }, []);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        onChange(e.target.value);
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <textarea ref={commentRef} className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` } value={value} onChange={handleChange}/>
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
