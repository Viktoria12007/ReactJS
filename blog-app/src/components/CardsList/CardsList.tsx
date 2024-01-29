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
	const [countLoad, setCountLoad] = useState(0);
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
							after: nextAfter,
						}
					});
				setNextAfter(after);
				setPosts(prevState => {
					return prevState.concat(...children);
				});
				setCountLoad(countLoad + 1);
			} catch (e) {
				setCountLoad(0);
				setErrorLoading(String(e));
			} finally {
				setLoading(false);
			}
		}
		const observer = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting && countLoad < 3) {
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
	}, [nextAfter, countLoad]);

	function handlerLoadMore() {
		setCountLoad(0);
	}

	return (
		<ul className={style.cardsList}>
			{ !posts.length && !loading && !errorLoading && (
				<div style={{textAlign: 'center'}}>Список постов пуст</div>
			)}
			{cards}
			<div ref={bottomOfList}></div>
			{ loading && countLoad < 3 && <div style={{textAlign: 'center'}}>Загрузка...</div> }
			{ countLoad >= 3 && <button className={style.loadMore} onClick={handlerLoadMore}>Загрузить ещё</button> }
			{ errorLoading && <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div> }
		</ul>
	);
}
