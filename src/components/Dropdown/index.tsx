import React from "react";
import { Menu, Transition } from '@headlessui/react';
import styles from "./Dropdown.module.css";

type Item = {
    id: any,
    element: React.ReactElement
}

interface DropdownProps {
    trigger: React.ReactElement,
    menu: Array<Item>,
    className?: string
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    return (
        <Menu as="div" className={styles["dropdown"]}>
            <Menu.Button>
                {props.trigger}
            </Menu.Button>
            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={styles["menu"]}>
                    {props.menu.map((menu: Item) => (
                        <Menu.Item key={menu.id} className={styles["item"]}>
                            {menu.element}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default Dropdown