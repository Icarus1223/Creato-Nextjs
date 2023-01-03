interface CreatorProps {
    name: string,
    avatar: string,
    categories: string
}

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import Icon from "../Icon";
import styles from "./Creator.module.css";

export default function Creator(props: CreatorProps) {
    return (
        <div className={styles["admin-creator"]}>
            <div className={styles["creator-avatar"]}>
                <Avatar.CreatorAvatar size="lg" src={props.avatar} />
            </div>
            <div className="flex justify-center flex-col items-center">
                <span className="font-extrabold text-xl text-primary-500">{props.name}</span>
                <span className="font-bold text-sm text-neutral-500 mt-[6px]">{props.categories}</span>
            </div>
            <div className="mt-5 flex justify-around">
                <Button.PrimaryButton outline="true" value="FREE Bite" width="130px"><Icon icon="add" /></Button.PrimaryButton>
                <Button.PrimaryButton outline="true" value="Paid Bite" width="130px"><Icon icon="add" /></Button.PrimaryButton>
            </div>
        </div>
    )
}