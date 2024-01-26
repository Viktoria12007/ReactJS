import Card from './Card/Card';
import style from './CardsList.module.css';
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function CardsList(): React.JSX.Element {
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorLoading, setErrorLoading] = useState('');
	const [nextAfter, setNextAfter] = useState('');
	const bottomOfList = useRef<HTMLDivElement>(null);
	const cards = posts.map((post) => <Card key={post.data.id} data={post.data}/>);

	useEffect(() => {
		async function load() {
			setLoading(true);
			setErrorLoading('');
			try {
				const { data: { data: { after, children }} } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true',
					{
						params: {
							limit: 10,
							['after']: nextAfter,
						}
					});
				setNextAfter(after);
				setPosts(prevState => {
					console.log(prevState);
					return prevState.concat(...children);
				});
			} catch (e) {
				setErrorLoading(String(e));
			} finally {
				setLoading(false);
			}
		}
		const observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				console.log('load more');
				load();
			}
		}, { rootMargin: '10px' });
		if (bottomOfList.current) {
			observer.observe(bottomOfList.current);
		}
		return () => {
			if (bottomOfList.current) {
				observer.unobserve(bottomOfList.current);
			}
		}
	}, [bottomOfList.current, nextAfter]);

	return (
		<ul className={style.cardsList}>
			{ !posts.length && !loading && !errorLoading && (
				<div style={{textAlign: 'center'}}>Список постов пуст</div>
			)}
			{cards}
			<div ref={bottomOfList}></div>
			{ loading && <div style={{textAlign: 'center'}}>Загрузка...</div> }
			{ errorLoading && <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div> }
		</ul>
	);
}
