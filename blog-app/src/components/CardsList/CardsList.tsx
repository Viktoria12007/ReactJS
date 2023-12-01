import Card from './Card/Card';
import style from './CardsList.module.css';
import * as React from "react";
import {postsContext} from "../../context/postsContext";
import {useContext} from "react";

export default function CardsList(): React.JSX.Element {
	const posts = useContext(postsContext);
	const cards = posts.map((post) => <Card key={post.data.id} data={post.data}/>)
	return (
		<ul className={style.cardsList}>
			{cards}
		</ul>
	);
}
