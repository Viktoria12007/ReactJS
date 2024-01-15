import {ChangeEvent, FormEvent} from "react";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateComment} from "../../features/comment/commentPostSlice";
import {CommentFormControl} from "../CommentForm/CommentFormControl";

export function CommentFormContainer() {
    const value = useSelector(state => state.commentPost.value);
    const dispatch = useDispatch();

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(e.target.value));
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <CommentFormControl
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}
