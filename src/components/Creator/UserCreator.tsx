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
        <div className={`${styles["user-creator"]} bg-shades-0 dark:bg-neutral-800`}>
            <div className="sm:flex">
                <div className={styles["creator-avatar"]}>
                    <Avatar.CreatorAvatar size="lg" src={avatar} />
                </div>
                <div className="flex justify-center flex-col items-center mt-5 sm:mt-0 sm:ml-5 sm:items-start">
                    <span className="font-extrabold text-xl text-primary-500">{name}</span>
                    <span className="font-bold text-sm text-neutral-500 mt-[6px] dark:text-shades-0">{categories}</span>
                </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0 sm:items-center sm:float-right">
                <Button.PrimaryButton outline="true" value="Profile"><Icon icon="profile" /></Button.PrimaryButton>
            </div>
        </div>
    )
}

export default Creator