import * as React from "react";
import styleDropdown from "../Dropdown/Dropdown.module.css";
import Icon from "../Icons/components/Icon";

interface IItem {
    id: string,
    text: string,
    onClick: (id: string) => void,
    className?: object,
    As?: 'a' | 'li' | 'button' | 'div',
    href?: string,
    icon?: {
        name: string,
        size?: number,
    },
}

interface IGenericListProps {
    list: IItem[],
    postId?: string,
}

function getId(id) {
    console.debug(id);
}

export function GenericList({ list, postId }: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'li', text, onClick = getId, className = styleDropdown, id, href, icon}, index) => (
                    <As
                        className={className.menuItem}
                        onClick={() => onClick(postId)}
                        key={id}
                        href={href}
                    >
                        <button className={className.menuItemButton} >
                            { icon && (icon.size ? <Icon name={icon.name} size={icon.size} /> : <Icon name={icon.name} />) }
                            <span>{text}</span>
                        </button>
                    </As>
            ))}
        </>
    )
}
