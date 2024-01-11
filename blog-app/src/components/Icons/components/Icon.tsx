import * as React from "react";
import EIcons from "../Icons";

interface IIconProps {
    name: string,
    size?: number,
}

export default function Icon ({ name, size }: IIconProps) {
    const IconElement = EIcons[name];
    return (
        size ? <IconElement size={size} /> : <IconElement />
    )
}
