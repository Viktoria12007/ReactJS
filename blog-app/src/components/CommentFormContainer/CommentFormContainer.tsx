import {ChangeEvent, FormEvent} from "react";
import * as React from "react";
import {CommentFormControl} from "../CommentForm/CommentFormControl";
import {useRecoilState} from "recoil";
import {commentPost} from "../../features/commentRecoil/commentRecoilAtom";

export function CommentFormContainer() {
    const [comment, setComment] = useRecoilState(commentPost);

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setComment(e.target.value);
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
