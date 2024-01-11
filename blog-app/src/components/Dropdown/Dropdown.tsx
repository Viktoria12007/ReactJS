import style from './Dropdown.module.css';
import * as React from "react";
import {useEffect, useState, useRef} from "react";
import {NOOP} from "../../utils/noop";
import {createPortal} from "react-dom";

interface IDropdownProps {
    button: React.ReactNode,
    children: React.ReactNode,
    isOpen?: boolean,
    onOpen?: () => void,
    onClose?: () => void,
}
interface ICoords {
    top: number,
    left: number,
}

export default function Dropdown({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) {
    const controlRef = useRef(null);
    const [openDropdown, setOpenDropdown] = useState(isOpen);
    const [coords, setCoords] = useState<ICoords | null>(null);

    useEffect(() => {
        if (isOpen) {
            const currentCoords = getCoords();
            setCoords(currentCoords);
        }
        setOpenDropdown(isOpen);
    }, [isOpen]);
    useEffect(() => openDropdown ? onOpen() : onClose(), [openDropdown]);

    function handleOpen() {
        if (isOpen === undefined) {
            setOpenDropdown(!openDropdown);
        }
        const currentCoords = getCoords();
        setCoords(currentCoords);
    }
    function getCoords() {
        const box = controlRef.current.getBoundingClientRect();
        if (box) {
            return {
                top: box.top + window.scrollY + box.height,
                left: box.left + window.scrollX - 60,
            }
        }
        return null;
    }

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return(
        <div className={style.container}>
            <div onClick={handleOpen} ref={controlRef}>
                { button }
            </div>
            { openDropdown && coords && createPortal(
                <>
                    <div className={style.backdrop} onClick={() => setOpenDropdown(false)}></div>
                    <div className={style.listContainer} >
                        <div className={style.list} onClick={() => setOpenDropdown(false)}>
                            <div className={style.dropdown} style={{ top: coords?.top, left: coords?.left }}>
                                {children}
                            </div>
                        </div>
                    </div>
                </>,
                node
                )
            }
        </div>
    );
};
