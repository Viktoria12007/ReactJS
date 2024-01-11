import avatar from './avatar.png';
import style from './TextContent.module.css';
import * as React from "react";
import {useState} from "react";
import {Post} from "../../../Post/Post";
import axios from "axios";

export default function TextContent({data, resolveLink = true}): React.JSX.Element {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [comments, setComments] = useState([]);

	function handleModalOpen (e) {
		e.stopPropagation();
		axios.get(`http://api.reddit.com/r/${data.subreddit}/comments/${data.id}`).then(({ data }) => {
			const listComments = data.filter((item) => !item.data.dist).map((item) => item.data.children).flat().filter((item) => item.kind !== 'more');
			setComments(listComments);
			setIsModalOpened(true);
        }).catch((e) => console.error(e));
	}

	return (
		<div className={style.textContent}>
			<div className={style.metaData}>
				<div className={style.userLink}>
					<img className={style.avatar} alt='avatar' src={avatar}></img>
					<a href='#user-url' className={style.username}>{data.author}</a>
				</div>
				<span className={style.createdAt}>
					<span className={style.publishedLabel}>опубликовано </span>
					5 часов назад</span>
			</div>
			<h2 className={style.title}>
				{resolveLink ? <a className={style.postLink} href='#post-url' onClick={handleModalOpen}>{data.title}</a> : <div>{data.title}</div>}
				{isModalOpened && (
					<Post onClose={() => setIsModalOpened(false)} data={data} comments={comments} />
				)}
			</h2>
		</div>
	);
}
