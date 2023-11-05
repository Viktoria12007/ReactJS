import * as React from "react";
import EIcons from "../Icons";
import { INameIconProp } from "../types/IIconProps";

interface IIconProps {
    name: INameIconProp,
    size?: number,
}

export default function Icon ({ name, size }: IIconProps) {
    const IconElement = EIcons[name];
    return (
        size ? <IconElement size={size} /> : <IconElement />
    )
}
