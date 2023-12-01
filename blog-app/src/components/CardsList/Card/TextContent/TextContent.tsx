import avatar from './avatar.png';
import style from './TextContent.module.css';
import * as React from "react";

export default function TextContent({data}): React.JSX.Element {
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
				<a className={style.postLink} href={data.url}>{data.title}</a>
			</h2>
		</div>
	);
}
