import style from './CommentForm.module.css';
import {ChangeEvent, FormEvent, useContext, useEffect, useRef, useState} from "react";
import {userContext} from "../../context/userContext";

export function CommentFormAnswer() {
    const [valueCommentFormAnswer, onChangeCommentFormAnswer] = useState('');
    const { name } = useContext(userContext);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        commentRef.current?.focus();
    }, []);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        onChangeCommentFormAnswer(e.target.value);
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <textarea ref={commentRef} className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` } value={valueCommentFormAnswer} onChange={handleChange}/>
            <button type="submit" className={style.button}>Комментировать</button>
        </form>
    );
}
