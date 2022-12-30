import Image, { StaticImageData } from "next/image"
import Chip from "../Chip"
import Icon from "../Icon"
import { displayCurrency, displayPostTime } from "../../functions"
import styles from "./BSKCard.module.css"

interface BSKProfileProps {
    thumbnails: Array<string | StaticImageData>,
    isLogin: boolean,
    isMine?: boolean,
    locked: boolean,
    title: string,
    time: number,
    currency?: string
    price?: number,
    unlockedCnt: number
}

export default function ProfileCard(props: BSKProfileProps) {
    const type = props.isMine ? 'mine' : props.locked ? props.currency ? 'locked' : 'free' : 'unlocked'

    return (
        <div className={styles['bskcard-profile']}>
            <div className={`flex items-center rounded-t-[5px] px-3 py-[5px] h-[28px] ${styles[`header-${type}`]}`}>
                <Chip type={type}>{type === "mine" ? 'My Bite' : type === 'unlocked' ? 'Unlcoked' : props.currency ? displayCurrency(props.currency) + ' ' + props.price : 'Free'}</Chip>
                <Chip type={type} value={`${props.unlockedCnt} ${props.currency ? 'purchased' : 'unlocked'}`}><Icon icon="noofpeople" className="fill-shades-0 mr-[3px]" /></Chip>
            </div>
            <div className={`relative flex justify-center items-center h-[495px] rounded-b-[5px] overflow-hidden ${styles[`body-${type}`]}`}>
                <Image
                    alt="BSKProfileImage"
                    className="w-full"
                    src={props.thumbnails[0]}
                />
                {!props.isLogin &&
                    <div className={`absolute h-[495px] w-[280px] flex justify-center items-center ${styles['locked-bg']}`}>
                        <div className={`px-[10px] w-fit h-[50px] rounded-[7px] border-primary-500 border-[1px] flex justify-center items-center ${styles['lock-btn']}`}>
                            <span className="relative ml-[30px] font-normal text-base">Unlock</span>
                        </div>
                    </div>
                }
            </div>
            <div className={styles["footer"]}>
                <div className="font-extrabold text-error-500 text-xm inline-flex items-center">
                    <Icon icon="clock" className="mr-[5px] fill-error-500" />
                    <span>{displayPostTime(props.time)}</span>
                </div>
                <div className="line-clamp-2 font-bold text-xl text-primary-500">
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    )
}