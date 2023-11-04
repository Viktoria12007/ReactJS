import style from './Dropdown.module.css';
import * as React from "react";
import {useEffect, useState} from "react";
import {NOOP} from "../../../../utils/noop";

interface IDropdownProps {
    button: React.ReactNode,
    children: React.ReactNode,
    isOpen?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
}

export default function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps): React.JSX.Element {
    const [openDropdown, setOpenDropdown] = useState(isOpen);
    useEffect(() => setOpenDropdown(isOpen), [isOpen]);
    useEffect(() => openDropdown ? onOpen() : onClose(), [openDropdown])
    function handleOpen() {
        if (isOpen === undefined) {
            setOpenDropdown(!openDropdown);
        }
    }
    return(
        <div className={style.container}>
            <div onClick={handleOpen}>
                { button }
            </div>
            { openDropdown && (
                <div className={style.listContainer}>
                    <div className={style.list} onClick={() => setOpenDropdown(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};
