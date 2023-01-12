import { Avatar } from "@/src/components/Avatar";
import { Button } from "@/src/components/Button";
import Icon from "@/src/components/Icon";
import styles from "./Creator.module.css";

interface CreatorProps {
    name: string,
    avatar: string,
    categories: string,
    profileUrl: string
}


const Creator: React.FC<CreatorProps> = ({ avatar, name, categories }) => {
    return (
        <div className={styles["user-creator"]}>
            <div className="sm:flex">
                <div className={styles["creator-avatar"]}>
                    <Avatar.CreatorAvatar size="lg" src={avatar} />
                </div>
                <div className={styles["name-category"]}>
                    <span className={styles["name"]}>{name}</span>
                    <span className={styles["category"]}>{categories}</span>
                </div>
            </div>
            <div className={styles['buttons']}>
                <Button.PrimaryButton outline="true" value="Profile">
                    <Icon icon="profile" />
                </Button.PrimaryButton>
            </div>
        </div>
    )
}

export default Creator