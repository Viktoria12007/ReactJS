import Card from './Card/Card';
import style from './CardsList.module.css';
import * as React from "react";

export default function CardsList(): React.JSX.Element {
	return (
		<ul className={style.cardsList}>
			<Card />
		</ul>
	);
}
