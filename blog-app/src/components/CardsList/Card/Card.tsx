import style from './Card.module.css';
import Controls from './Controls/Controls.js';
import Menu from './Menu/Menu.js';
import Preview from './Preview/Preview.js';
import TextContent from './TextContent/TextContent.js';

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
