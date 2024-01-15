import {useState} from "react";
import {CommentFormControl} from "../CommentForm/CommentFormControl";
import {commentContext} from "../../context/commentContext";

export function CommentFormWrap() {
    const [commentValue, setCommentValue] = useState('');
    return (
        <commentContext.Provider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <CommentFormControl/>
        </commentContext.Provider>
    )
}
