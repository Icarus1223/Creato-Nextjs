interface DropdownProps {
    open: boolean,
    setOpen: Function,
    trigger: React.ReactElement,
    menu: Array<React.ReactElement>,
    className?: string
}

import { useRef, useEffect, useMemo } from "react";
import { useOutsideAlerter } from "../../hook";
import styles from "./Dropdown.module.css";

export default function Dropdown(props: DropdownProps) {
    const wrapRef = useRef(null)
    const res = useOutsideAlerter(wrapRef, props.open)
    useEffect(() => { if (!res) props.setOpen(res) }, [res])

    const DropdownBody = useMemo(() => {
        if (props.open) return (
            <ul className={`${styles["menu"]} ${props.className}`} ref={wrapRef}>
                {props.menu.map((item: React.ReactElement) => (
                    <li key={item.key} className={`${styles["menu-item"]} hover:bg-neutral-100 dark:hover:bg-neutral-700`}>{item}</li>
                ))}
            </ul>
        )
        else return <></>
    }, [props.open])

    return (
        <div className={styles["dropdown"]}>
            {props.trigger}
            {DropdownBody}
        </div>
    )
}