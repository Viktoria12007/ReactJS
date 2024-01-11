import styleMenu from './Menu.module.css';
import styleDropdown from '../../../Dropdown/Dropdown.module.css';
import { useState } from "react";
import Dropdown from "../../../Dropdown/Dropdown";
import * as React from "react";
import { GenericList } from "../../../GenericList/GenericList";
import { generateId } from "../../../../utils/generateRandomIndex";
import MenuIcon from "../../../Icons/components/MenuIcon";

const list = [
	{ text: 'Коментарии', icon: { name: 'commentIcon' } },
	{ text: 'Поделиться', icon: { name: 'shareIcon' } },
	{ text: 'Скрыть', icon: { name: 'hideIcon' } },
	{ text: 'Сохранить', icon: { name: 'saveIcon' } },
	{ text: 'Пожаловаться', icon: { name: 'complainIcon' } },
].map(generateId);

export default function Menu(): React.JSX.Element {
	const [openDropdown, setOpenDropdown] = useState(false);
	function handleClick () {
		setOpenDropdown(!openDropdown);
	}
	const menuButton = (<button className={styleMenu.menuButton} onClick={handleClick}>
							<MenuIcon />
						</button>);
	return (
		<div className={styleMenu.menu}>
			<Dropdown onOpen={() => console.log('open')} onClose={() => console.log('close')} button={menuButton}>
				<ul className={styleDropdown.menuItemsList}>
					<GenericList list={list} postId={'1234'} />
				</ul>
				<button className={styleDropdown.closeButton}>Закрыть</button>
			</Dropdown>
		</div>
	);
}
