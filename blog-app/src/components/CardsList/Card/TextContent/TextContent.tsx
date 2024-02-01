import avatar from './avatar.png';
import style from './TextContent.module.css';
import * as React from "react";
import {Link} from "react-router-dom";

export default function TextContent({data, resolveLink = true}): React.JSX.Element {
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
				{resolveLink ? <Link className={style.postLink} to={`/posts/${data.id}`}>{data.title}</Link> : <div>{data.title}</div>}
			</h2>
		</div>
	);
}
