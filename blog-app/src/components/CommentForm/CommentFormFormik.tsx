import {ErrorMessage, Field, Form, Formik} from "formik";
import style from "./CommentForm.module.css";
import Icon from "../Icons/components/Icon";
import {useSelector} from "react-redux";
import {userData} from "../../features/user/userSlice";

type errors = {
    commentPost?: string,
}

export function CommentFormFormik() {
    const { name } = useSelector(userData);

    return (
        <Formik
            initialValues={{ commentPost: '' }}
            validate={values => {
                const errors: errors = {};
                if (!values.commentPost) {
                    errors.commentPost = 'Поле обязательно к заполнению';
                } else if (values.commentPost.length <= 3) {
                    errors.commentPost = 'Введите больше 3-х символов';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={style.form}>
                    <Field component="textarea" name="commentPost" className={style.input} placeholder={`${name || 'Аноним'}, оставьте ваш комментарий` }/>
                    <ErrorMessage name="commentPost" component="div" />
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
                        <button type="submit" className={style.button} disabled={isSubmitting}>Комментировать</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
