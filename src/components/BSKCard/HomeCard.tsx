import { Avatar } from "../Avatar"
import Chip from "../Chip"
import Icon from "../Icon"
import styles from "./BSKCard.module.css"

interface BSKHomeProps {

}

export default function HomeCard(props: BSKHomeProps) {
    return (
        <div className={styles['bskcard-home']}>
            <div className={styles['bsk-avatar']}>
                <Avatar.CreatorAvatar size="lg" src="https://i.pravatar.cc/150?img=3" />
            </div>
            <div className={styles["bsk-content"]}>
                <div className={styles["header"]}>
                    <div className="font-extrabold text-neutral-700 text-sm">
                        <span>Owner Name</span>
                    </div>
                    <div className="font-extrabold text-error-500 text-xm inline-flex items-center">
                        <Icon icon="clock" className="mr-[5px] fill-error-500" />
                        <span>Posted 3 days ago</span>
                    </div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles[`thumbnail-locked`]}>
                        <img
                            className="absolute w-full"
                            src="https://picsum.photos/id/27/300/200"
                        />
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <div className="flex justify-center">
                        <Chip className="mr-[9px]" type="locked">$USD 100</Chip>
                        <Chip type="locked" value="1 purchased"><Icon icon="noofpeople" className="fill-shades-0 mr-[3px]"/></Chip>
                    </div>
                    <div className="line-clamp-2 mt-[10px] font-bold text-xl text-primary-500">
                        <span>BSK title BSK titlte BSK title BSK title BSK title BSK title BSK title</span>
                    </div>
                </div>
            </div>
        </div>
    )
}