import Chip from "../Chip"
import Icon from "../Icon"
import styles from "./BSKCard.module.css"

interface BSKProfileProps {

}

export default function ProfileCard(props: BSKProfileProps) {
    return (
        <div className={styles['bskcard-profile']}>
            <div className={`${styles["header-free"]} flex items-center`}>
                <Chip type="free">Free</Chip>
                <Chip type="free" value="1 unlocked"><Icon icon="noofpeople" className="fill-shades-0 mr-[3px]" /></Chip>
            </div>
            <div className={styles["body-free"]}>
                <img
                    className="absolute w-full"
                    src="https://picsum.photos/id/27/300/200"
                />
            </div>
            <div className={styles["footer"]}>
                <div className="font-extrabold text-error-500 text-xm inline-flex items-center">
                    <Icon icon="clock" className="mr-[5px] fill-error-500" />
                    <span>Posted 3 days ago</span>
                </div>
                <div className="line-clamp-2 font-bold text-xl text-primary-500">
                    <span>BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title</span>
                </div>
            </div>
        </div>
    )
}