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

export default function SideMenu(props: SideMenuProps) {
    return (
        <div className="sidemenu">
            {props.tabs.map((tab: Tab, index: number) => (
                <div 
                    className={`sidemenu-menu${index === props.tab ? ' active' : ''}`}
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