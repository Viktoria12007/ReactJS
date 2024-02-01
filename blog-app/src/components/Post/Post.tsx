import style from "./Post.module.css";
import { createPortal } from 'react-dom';
import {useEffect, useRef, useState} from "react";
import Controls from "../CardsList/Card/Controls/Controls";
import * as React from "react";
import TextContent from "../CardsList/Card/TextContent/TextContent";
import {Comments} from "../Comments/Comments";
import Icon from "../Icons/components/Icon";
// import {CommentFormContainer} from "../CommentFormContainer";
import {CommentFormFormik} from "../CommentForm/CommentFormFormik";
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {postById} from "../../features/posts/postsSlice";
import axios from "axios";

export function Post() {
    const [comments, setComments] = useState([]);
    const ref = useRef<HTMLDivElement>(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const dataPost = useSelector(state => postById(state, id))?.data;

    function onClose() {
        navigate(-1);
    }

    function handleClick(e: MouseEvent) {
        if (e.target instanceof Node && !ref.current?.contains(e.target)) {
            onClose();
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick);
        async function load() {
            try {
                const dataComments = await axios.get(`http://api.reddit.com/r/${dataPost?.subreddit}/comments/${dataPost?.id}`);
                setComments(dataComments ? dataComments.data.filter((item) => !item.data.dist).map((item) => item.data.children).flat().filter((item) => item.kind !== 'more') : []);
            } catch (e) {
                console.error(e);
            }
        }
        load();
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
            { dataPost ? <>
                            <div className={style.headerModal}>
                                <Controls data={dataPost}/>
                                <TextContent data={dataPost} resolveLink={false}/>
                            </div>
                            <div className={style.content}>
                                {dataPost.selftext && <p className={style.textModal}>{dataPost.selftext}</p>}
                                <img className={style.previewImg} alt='post' src={dataPost.thumbnail}></img>
                                {/*<CommentFormContainer/>*/}
                                <CommentFormFormik/>
                                <Comments comments={comments}/>
                            </div>
                        </>
             : <div className={style.content}>Такого поста не существует!</div>
            }
        </div>, node);
}
