import Image from "next/image"
import Chip from "../Chip"
import Icon from "../Icon"
import styles from "./BSKCard.module.css"
import image from "../../assets/test.png"

interface BSKProfileProps {

}

export default function ProfileCard(props: BSKProfileProps) {
    return (
        <div className={styles['bskcard-profile']}>
            <div className={`flex items-center rounded-t-[5px] px-3 py-[5px] h-[28px] ${styles["header-free"]}`}>
                <Chip type="free">Free</Chip>
                <Chip type="free" value="1 unlocked"><Icon icon="noofpeople" className="fill-shades-0 mr-[3px]" /></Chip>
            </div>
            <div className={`flex justify-center items-center h-[495px] rounded-b-[5px] overflow-hidden ${styles["body-free"]}`}>
                <Image
                    alt="BSKProfileImage"
                    className="w-full"
                    src={image}
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