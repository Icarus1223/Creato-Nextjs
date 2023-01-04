interface DropdownProps {
    open: boolean,
    setOpen: Function,
    trigger: React.ReactElement,
    menu: Array<React.ReactElement>,
    className?: string
}

import { useRef, useEffect } from "react";
import { useOutsideAlerter } from "../../hook";
import styles from "./Dropdown.module.css";

export default function Dropdown(props: DropdownProps) {
    const wrapRef = useRef(null)
    const res = useOutsideAlerter(wrapRef, props.open)
    useEffect(() => { if (!res) props.setOpen(res) }, [res])

    return (
        <div className={styles["dropdown"]}>
            {props.trigger}
            {props.open ?
                <ul className={`${styles["menu"]} ${props.className}`} ref={wrapRef}>
                    {props.menu.map((item: React.ReactElement, index: number) => (
                        <li key={index} className={`${styles["menu-item"]} hover:bg-neutral-100 dark:hover:bg-neutral-700`}>{item}</li>
                    ))}
                </ul>
                : null}
        </div>
    )
}