import style from './Card.module.css';
import Controls from './Controls/Controls.js';
import Menu from './Menu/Menu.js';
import Preview from './Preview/Preview.js';
import TextContent from './TextContent/TextContent.js';
import * as React from "react";

export default function Card({data}): React.JSX.Element {
	return (
		<li className={style.card}>
			<TextContent data={data} />
			<Preview preview={data.thumbnail} />
			<Menu />
			<Controls data={data}/>
		</li>
	);
}
