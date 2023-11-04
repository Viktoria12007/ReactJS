import styleMenu from './Menu.module.css';
import styleDropdown from '../Dropdown/Dropdown.module.css';
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import * as React from "react";
import { GenericList } from "../../../GenericList/GenericList";
import { generateId } from "../../../../utils/generateRandomIndex";
import {commentSvg, complainSvg, hideSvg, saveSvg, shareSvg} from "./listIcons";

const list = [
	{ text: 'Коментарии', svg: commentSvg },
	{ text: 'Поделиться', svg: shareSvg },
	{ text: 'Скрыть', svg: hideSvg },
	{ text: 'Сохранить', svg: saveSvg },
	{ text: 'Пожаловаться', svg: complainSvg },
].map(generateId);

export default function Menu(): React.JSX.Element {
	const [openDropdown, setOpenDropdown] = useState(false);
	function handleClick () {
		setOpenDropdown(!openDropdown);
	}
	const menuButton = (<button className={styleMenu.menuButton} onClick={handleClick}>
		<svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
			<circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
			<circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
		</svg>
	</button>);
	return (
		<div className={styleMenu.menu}>
			<Dropdown onOpen={() => console.log('open')} onClose={() => console.log('close')} button={menuButton}>
				<div className={styleDropdown.dropdown}>
					<ul className={styleDropdown.menuItemsList}>
						<GenericList list={list} />
					</ul>
					<button className={styleDropdown.closeButton}>Закрыть</button>
				</div>
			</Dropdown>
		</div>
	);
}
