import { useRef, useEffect, useMemo } from "react";
import { useOutsideAlerter } from "../../hook";
import styles from "./Dropdown.module.css";

interface DropdownProps {
    open: boolean,
    setOpen: Function,
    trigger: React.ReactElement,
    menu: Array<React.ReactElement>,
    className?: string
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    const wrapRef = useRef(null)
    const res = useOutsideAlerter(wrapRef, props.open)
    useEffect(() => { if (!res) props.setOpen(res) }, [res])

    const DropdownBody = useMemo(() => {
        if (props.open) return (
            <ul className={`${styles["menu"]} ${props.className}`} ref={wrapRef}>
                {props.menu.map((item: React.ReactElement) => (
                    <li key={item.key} className={styles["menu-item"]}>{item}</li>
                ))}
            </ul>
        )
        else return null
    }, [props.open])

    return (
        <div className={styles["dropdown"]}>
            {props.trigger}
            {DropdownBody}
        </div>
    )
}

export default Dropdown