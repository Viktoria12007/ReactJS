import {ChangeEvent, FormEvent} from "react";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateComment} from "../../features/comment/commentPostSlice";
import {CommentFormControl} from "../CommentForm/CommentFormControl";
import {commentPost} from "../../features/comment/commentPostSlice";

export function CommentFormContainer() {
    const dispatch = useDispatch();
    const comment = useSelector(commentPost);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(e.target.value));
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(comment);
    }

    return (
        <CommentFormControl
            value={comment}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}
