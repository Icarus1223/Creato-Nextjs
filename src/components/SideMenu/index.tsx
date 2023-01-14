import React from "react";
import { Tab } from '@headlessui/react'
import styles from "./SideMenu.module.css";

type Tab = {
    id: number,
    name: string,
    component: React.ReactNode
}

interface SideMenuProps {
    tabs: Array<Tab>,
}

const classNames = (...classes: Array<string>) => {
    return classes.filter(Boolean).join(' ')
}

const SideMenu: React.FC<SideMenuProps> = (props) => {
    return (
        <Tab.Group>
            <Tab.List className={styles["sidemenu"]}>
                {props.tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        className={({ selected }) =>
                            classNames(
                                'w-full rounded-[10px] !font-bold text-xs sm:text-sm outline-none',
                                selected
                                    ? 'bg-shades-0 text-primary-500'
                                    : 'text-shades-0'
                            )
                        }
                    >
                        {tab.name}
                    </Tab>
                ))}
            </Tab.List>
            <Tab.Panels>
                {props.tabs.map((tab) => (
                    <Tab.Panel key={tab.id}>{tab.component}</Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default SideMenu