import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Avatar } from "../Avatar"
import Chip from "../Chip"
import Icon from "../Icon"
import nextImg from "../../assets/img/next-bright.png";
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
    const [videoIndex, setVideoIndex] = useState(0)

    return (
        <div className={styles['bskcard-home']}>
            <div className={`${styles['bsk-avatar']}`}>
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
                            src={props.thumbnails[videoIndex]}
                        />
                    </div>
                    {!props.isLogin &&
                        <div className={`absolute h-[495px] w-[280px] rounded-b-[15px] top-[-19px] flex justify-center items-center ${styles['locked-bg']}`}>
                            <div className={`px-[10px] w-fit h-[50px] rounded-[7px] border-primary-500 border-[1px] flex justify-center items-center ${styles['lock-btn']}`}>
                                <span className="relative ml-[30px] font-normal text-base">Unlock</span>
                            </div>
                        </div>
                    }
                    <div className="relative w-[280px]">
                        {videoIndex > 0 &&
                            <Image
                                className="absolute top-[200px] left-[5px] rotate-180 cursor-pointer"
                                src={nextImg}
                                alt="PrevImage"
                                onClick={() => { setVideoIndex((prevIndex: number) => (prevIndex - 1) % props.thumbnails.length) }}
                            />
                        }
                        {videoIndex < (props.thumbnails.length - 1) &&
                            <Image
                                className="absolute top-[200px] right-[5px] cursor-pointer"
                                src={nextImg}
                                alt="NextImage"
                                onClick={() => { setVideoIndex((prevIndex: number) => (prevIndex + 1) % props.thumbnails.length) }}
                            />
                        }
                    </div>
                    <div className="absolute flex bottom-[8px]">
                        {props.thumbnails.map((thumb: any, index: number) => (
                            <div key={index} className={`h-[9px] w-[52px] ${videoIndex === index ? 'bg-primary-500' : 'bg-shades-200'} mx-2 rounded-[7px]`}></div>
                        ))}
                    </div>
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