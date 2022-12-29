import { Dispatch, SetStateAction } from "react";

type Tab = {
    url: string,
    name: string
}

interface SideMenuProps {
    tabs: Array<Tab>,
    tab: number,
    setTab: Dispatch<SetStateAction<number>>
}
import styles from "./SideMenu.module.css";

export default function SideMenu(props: SideMenuProps) {
    return (
        <div className={styles['sidemenu']}>
            {props.tabs.map((tab: Tab, index: number) => (
                <div
                    className={index === props.tab ? styles[`sidemenu-menu-active`] : styles['sidemenu-menu']}
                    key={index}
                    onClick={() => {
                        props.setTab(index)
                    }}
                >
                    <span>{tab.name}</span>
                </div>
            ))}
        </div>
    )
}