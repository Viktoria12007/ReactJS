import style from './CommentForm.module.css';
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {userData} from "../../features/user/userSlice";

export function CommentFormAnswer() {
    const [valueCommentFormAnswer, onChangeCommentFormAnswer] = useState('');
    const { name } = useSelector(userData);
    const commentRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        commentRef.current?.focus();
    }, []);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        onChangeCommentFormAnswer(e.target.value);
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(valueCommentFormAnswer);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <textarea ref={commentRef} className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` } value={valueCommentFormAnswer} onChange={handleChange}/>
            <button type="submit" className={style.button}>Комментировать</button>
        </form>
    );
}
