import { Avatar } from "@/src/components/Avatar";
import { Button } from "@/src/components/Button";
import Icon from "@/src/components/Icon";
import styles from "./Creator.module.css";

interface CreatorProps {
    name: string,
    avatar: string,
    categories: string
}

const Creator: React.FC<CreatorProps> = ({ avatar, name, categories }) => {
    return (
        <div className={`${styles["admin-creator"]} bg-shades-0 dark:bg-neutral-800`}>
            <div className={`${styles["creator-avatar"]} mb-5`}>
                <Avatar.CreatorAvatar size="lg" src={avatar} />
            </div>
            <div className="flex justify-center flex-col items-center">
                <span className="font-extrabold text-xl text-primary-500">{name}</span>
                <span className="font-bold text-sm text-neutral-500 mt-[6px] dark:text-shades-0">{categories}</span>
            </div>
            <div className="mt-5 flex justify-around">
                <Button.PrimaryButton outline="true" value="FREE Bite" width="130px"><Icon icon="add" /></Button.PrimaryButton>
                <Button.PrimaryButton outline="true" value="Paid Bite" width="130px"><Icon icon="add" /></Button.PrimaryButton>
            </div>
        </div>
    )
}

export default Creator