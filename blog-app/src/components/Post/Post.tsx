import style from "./Post.module.css";
import { createPortal } from 'react-dom';
import {useContext, useEffect, useRef} from "react";
import Controls from "../CardsList/Card/Controls/Controls";
import * as React from "react";
import TextContent from "../CardsList/Card/TextContent/TextContent";
import {Comment} from "../Comments/Comment";
import Icon from "../Icons/components/Icon";
import {CommentFormControl} from "../CommentForm/CommentFormControl";
import {commentContext} from "../../context/commentContext";

interface IPost {
    onClose?: () => void;
    data: any,
    comments: any,
}

export function Post({ onClose, data, comments }: IPost) {
    const ref = useRef<HTMLDivElement>(null);
    const { value, onChange } = useContext(commentContext);

    function handleClick(e: MouseEvent) {
        if (e.target instanceof Node && !ref.current?.contains(e.target)) {
            onClose?.();
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return createPortal(
        <div className={style.modal} ref={ref}>
            <button className={style.closeButton} onClick={onClose}>
                <Icon name="closeIcon" size={21} />
            </button>
            <div className={style.headerModal}>
                <Controls data={data}/>
                <TextContent data={data} resolveLink={false}/>
            </div>
            <div className={style.content}>
                <p className={style.textModal}>{data.selftext}</p>
                <img className={style.previewImg} alt='post' src={data.thumbnail}></img>
                <CommentFormControl value={value} onChange={onChange} />
                <ul>
                    { comments.map((comment) => (
                        <Comment comment={comment} key={self.crypto.randomUUID()}/>
                    ))}
                </ul>
            </div>
        </div>, node);
}
