import style from './CommentForm.module.css';
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {userData} from "../../features/user/userSlice";

export function CommentFormAnswer() {
    const [valueCommentFormAnswer, onChangeCommentFormAnswer] = useState('');
    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('');
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
        setTouched(true);
        setValueError(validateValue());
        const isFormValid = !validateValue();
        if (!isFormValid) return;
        alert('Форма отправлена!');
    }
    function validateValue() {
        if (valueCommentFormAnswer.length <= 3) return 'Введите больше 3-х символов';
        return '';
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <textarea
                ref={commentRef}
                className={style.input}
                placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` }
                value={valueCommentFormAnswer}
                onChange={handleChange}
                aria-invalid={valueError ? 'true' : undefined}
            />
            {touched && valueError && (<div>{valueError}</div>)}
            <button type="submit" className={style.button}>Комментировать</button>
        </form>
    );
}
