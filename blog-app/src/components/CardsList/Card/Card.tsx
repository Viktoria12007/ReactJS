import style from './Card.module.css';
import Controls from './Controls/Controls.js';
import Menu from './Menu/Menu.js';
import Preview from './Preview/Preview.js';
import TextContent from './TextContent/TextContent.js';
import * as React from "react";

export default function Card(): React.JSX.Element {
	return (
		<li className={style.card}>
			<TextContent />
			<Preview />
			<Menu />
			<Controls />
		</li>
	);
}
