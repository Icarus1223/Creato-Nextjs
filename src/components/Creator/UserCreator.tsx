interface CreatorProps {
    name: string,
    avatar: string,
    categories: string,
    profileUrl: string
}

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import Icon from "../Icon";
import styles from "./Creator.module.css";

export default function Creator(props: CreatorProps) {
    return (
        <div className={styles["user-creator"]}>
            <div className="sm:flex">
                <div className={styles["creator-avatar"]}>
                    <Avatar.CreatorAvatar size="lg" src={props.avatar} />
                </div>
                <div className="flex justify-center flex-col items-center mt-5 sm:mt-0 sm:ml-5 sm:items-start">
                    <span className="font-extrabold text-xl text-primary-500">{props.name}</span>
                    <span className="font-bold text-sm text-neutral-500 mt-[6px]">{props.categories}</span>
                </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0 sm:items-center sm:float-right">
                <Button.PrimaryButton outline="true" value="Profile"><Icon icon="profile" /></Button.PrimaryButton>
            </div>
        </div>
    )
}