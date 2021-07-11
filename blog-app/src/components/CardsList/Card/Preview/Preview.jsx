import React from 'react';
import ReactDOM from 'react-dom';
import preview from './preview.jpg';
import style from './Preview.module.css';

function Preview() {
	return (
		<div className={style.preview}>
			<img className={style.previewImg} alt='post' src={preview}></img>
		</div>
	);
}

export default Preview;