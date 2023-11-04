import * as React from "react";
import styleDropdown from "../CardsList/Card/Dropdown/Dropdown.module.css";

interface IItem {
    id: string,
    text: string,
    onClick: (id: string) => void,
    className?: object,
    As?: 'a' | 'li' | 'button' | 'div',
    href?: string,
    svg?: string,
}

interface IGenericListProps {
    list: IItem[],
}

function getId(id) {
    console.debug(id);
}

export function GenericList({ list }: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'li', text, onClick = getId, className = styleDropdown, id, href, svg}, index) => (
                    <As
                        className={className.menuItem}
                        onClick={() => onClick(id)}
                        key={id}
                        href={href}
                    >
                        <button className={className.menuItemButton} >
                            <div dangerouslySetInnerHTML={{ __html: svg || '' }}></div>
                            <span>{text}</span>
                        </button>
                    </As>
            ))}
        </>
    )
}
