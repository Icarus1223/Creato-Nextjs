import { Avatar } from "@/template/Avatar";
import { Button } from "@/template/Button";
import Icon from "@/template/Icon";
import styles from "./Creator.module.css";

interface CreatorProps {
    name: string,
    avatar: string,
    categories: string
}

const Creator: React.FC<CreatorProps> = ({ avatar, name, categories }) => {
    return (
        <div className={styles["admin-creator"]}>
            <div className={`${styles["creator-avatar"]} mb-5`}>
                <Avatar.CreatorAvatar size="lg" src={avatar} />
            </div>
            <div className={styles["name-category"]}>
                <span className={styles["name"]}>{name}</span>
                <span className={styles["category"]}>{categories}</span>
            </div>
            <div className={styles["buttons"]}>
                <Button.PrimaryButton outline="true" value="FREE Bite" width="130px"><Icon icon="add" /></Button.PrimaryButton>
                <Button.PrimaryButton outline="true" value="Paid Bite" width="130px"><Icon icon="add" /></Button.PrimaryButton>
            </div>
        </div>
    )
}

export default Creator