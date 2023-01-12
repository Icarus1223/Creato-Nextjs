import { Dispatch, SetStateAction } from "react";
import styles from "./SideMenu.module.css";

type Tab = {
    url: string,
    name: string
}

interface SideMenuProps {
    tabs: Array<Tab>,
    tab: number,
    setTab: Dispatch<SetStateAction<number>>
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
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

export default SideMenu