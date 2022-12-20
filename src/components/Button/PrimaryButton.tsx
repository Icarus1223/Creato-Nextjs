import React from "react";
import { ButtonProps } from "./interface";
import IconButton from "./IconButton";
import TextButton from "./TextButton";
import TextWithIconButton from "./TextwithIconButton";

export default function PrimaryButton(props: ButtonProps) {
    const { text, icon } = props
    return (
        <React.Fragment>
            {(text && typeof icon === 'undefined') && <TextButton />}
            {(typeof text === 'undefined' && icon) && <IconButton />}
            {(text && icon) && <TextWithIconButton />}
        </React.Fragment>
    )
}