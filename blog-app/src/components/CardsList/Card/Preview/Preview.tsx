import preview from './preview.jpg';
import style from './Preview.module.css';
import * as React from "react";

export default function Preview(): React.JSX.Element {
	return (
		<div className={style.preview}>
			<img className={style.previewImg} alt='post' src={preview}></img>
		</div>
	);
}
