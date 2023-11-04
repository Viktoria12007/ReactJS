import avatar from './avatar.png';
import style from './TextContent.module.css';
import * as React from "react";

export default function TextContent(): React.JSX.Element {
	return (
		<div className={style.textContent}>
			<div className={style.metaData}>
				<div className={style.userLink}>
					<img className={style.avatar} alt='avatar' src={avatar}></img>
					<a href='#user-url' className={style.username}>Владимир Петров</a>
				</div>
				<span className={style.createdAt}>
					<span className={style.publishedLabel}>опубликовано </span>
					5 часов назад</span>
			</div>
			<h2 className={style.title}>
				<a className={style.postLink} href='#post-url'>Следует отметить, что новая модель организационной деятельности...</a>
			</h2>
		</div>
	);
}
