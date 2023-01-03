import Image, { StaticImageData } from "next/image"
import { Avatar } from "../Avatar"
import Chip from "../Chip"
import Icon from "../Icon"
import { displayCurrency, displayPostTime } from "../../functions"
import styles from "./BSKCard.module.css"

type UserType = {
    name: string,
    avatar: string,
    profileUrl: string
}

interface BSKHomeProps {
    user: UserType,
    thumbnails: Array<string | StaticImageData>,
    isLogin: boolean,
    locked: boolean,
    title: string,
    time: number,
    currency?: string
    price?: number,
    unlockedCnt: number
}

export default function HomeCard(props: BSKHomeProps) {
    const type = props.locked ? props.currency ? 'locked' : 'free' : 'unlocked'

    return (
        <div className={styles['bskcard-home']}>
            <div className={styles['bsk-avatar']}>
                <Avatar.CreatorAvatar size="md" src={props.user.avatar} />
            </div>
            <div className={styles["bsk-content"]}>
                <div className={styles["header"]}>
                    <div className="font-extrabold text-neutral-700 text-sm">
                        <span>{props.user.name}</span>
                    </div>
                    <div className="font-extrabold text-error-500 text-xm inline-flex items-center">
                        <Icon icon="clock" className="mr-[5px] fill-error-500" />
                        <span>{displayPostTime(props.time)}</span>
                    </div>
                </div>
                <div className={styles["body"]}>
                    <div className={`absolute h-[495px] w-[280px] rounded-b-[15px] overflow-hidden flex items-center justify-center top-[-19px] ${styles[`thumbnail-${type}`]}`}>
                        <Image
                            alt="BSKHomeImage"
                            className="w-full"
                            src={props.thumbnails[0]}
                        />
                    </div>
                    {!props.isLogin &&
                        <div className={`absolute h-[495px] w-[280px] rounded-b-[15px] top-[-19px] flex justify-center items-center ${styles['locked-bg']}`}>
                            <div className={`px-[10px] w-fit h-[50px] rounded-[7px] border-primary-500 border-[1px] flex justify-center items-center ${styles['lock-btn']}`}>
                                <span className="relative ml-[30px] font-normal text-base">Unlock</span>
                            </div>
                        </div>
                    }
                </div>
                <div className={styles["footer"]}>
                    <div className="flex justify-center">
                        <Chip className="mr-[9px]" type={type}>{type === 'unlocked' ? 'Unlcoked' : props.currency ? displayCurrency(props.currency) + ' ' + props.price : 'Free'}</Chip>
                        <Chip type={type} value={`${props.unlockedCnt} ${props.currency ? 'purchased' : 'unlocked'}`}><Icon icon="noofpeople" className="fill-shades-0 mr-[3px]" /></Chip>
                    </div>
                    <div className="line-clamp-2 mt-[10px] font-bold text-xl text-primary-500">
                        <span>{props.title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}