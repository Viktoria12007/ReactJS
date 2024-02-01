import Card from './Card/Card';
import style from './CardsList.module.css';
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {fetchPosts, posts, after, countFetch, setCountFetch, error} from "../../features/posts/postsSlice";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

export default function CardsList(): React.JSX.Element {
	const [loading, setLoading] = useState(false);
	const countLoad = useSelector(countFetch);
	const bottomOfList = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const allPosts = useSelector(posts);
	const nextAfter = useSelector(after);
	const errorLoading = useSelector(error);
	const cards = allPosts.map((post) => <Card key={post.data.id} data={post.data}/>);

	useEffect(() => {
		function load() {
			setLoading(true);
			try {
				dispatch(fetchPosts({ nextAfter }));
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
		dispatch(setCountFetch(0));
	}

	return (
		<ul className={style.cardsList}>
			{ !allPosts.length && !loading && !errorLoading && (
				<div style={{textAlign: 'center'}}>Список постов пуст</div>
			)}
			{cards}
			<Outlet />
			<div ref={bottomOfList}></div>
			{ loading && countLoad < 3 && <div style={{textAlign: 'center'}}>Загрузка...</div> }
			{ countLoad >= 3 && <button className={style.loadMore} onClick={handlerLoadMore}>Загрузить ещё</button> }
			{ errorLoading && <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div> }
		</ul>
	);
}
