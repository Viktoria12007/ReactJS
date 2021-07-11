import React from 'react';
import style from './Card.module.css';
import Controls from './Controls/Controls';
import Menu from './Menu/Menu';
import Preview from './Preview/Preview';
import TextContent from './TextContent/TextContent';

function Card() {
	return (
		<li className={style.card}>
			<TextContent />
			<Preview />
			<Menu />
			<Controls />
		</li>
	);
}

export default Card;