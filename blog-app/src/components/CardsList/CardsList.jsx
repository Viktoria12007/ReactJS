import React from 'react';
import Card from './Card/Card';
import style from './CardsList.module.css';

function CardsList() {
	return (
		<ul className={style.cardsList}>
			<Card />
		</ul>
	);
}

export default CardsList;