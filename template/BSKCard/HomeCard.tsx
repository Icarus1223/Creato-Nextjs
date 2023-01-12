import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Avatar } from "@/src/components/Avatar"
import Chip from "@/src/components/Chip"
import Icon from "@/src/components/Icon"
import CurrencyText from "@/src/components/CurrencyText"
import PostTime from "@/src/components/PostTime"
import NavigatorBtn from "./NavigatorBtn"
import { CURRENCIES } from "src/constants"
import styles from "./BSKCard.module.css"

type ICurrency = keyof typeof CURRENCIES

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

const HomeCard: React.FC<BSKHomeProps> = (props) => {
    const type = props.locked ? props.currency ? 'locked' : 'free' : 'unlocked'
    const [videoIndex, setVideoIndex] = useState(0)

    const showPrevThumb = () => { setVideoIndex((prevIndex: number) => (prevIndex - 1) % props.thumbnails.length) }
    const showNextThumb = () => { setVideoIndex((prevIndex: number) => (prevIndex + 1) % props.thumbnails.length) }

    return (
        <div className={styles['bskcard-home']}>
            <div className={styles['bsk-avatar']}>
                <Avatar.CreatorAvatar size="md" src={props.user.avatar} />
            </div>
            <div className={styles["bsk-content"]}>
                <div className={styles["header"]}>
                    <div className={styles["name"]}>
                        <span>{props.user.name}</span>
                    </div>
                    <div className={styles["post-time"]}>
                        <Icon icon="clock" className={styles["clock-icon"]} />
                        <span><PostTime time={props.time} /></span>
                    </div>
                </div>
                <div className={styles["body"]}>
                    <div className={`${styles[`thumb`]} ${styles[`thumbnail-${type}`]}`}>
                        <Image
                            alt="BSKHomeImage"
                            className="w-full"
                            src={props.thumbnails[videoIndex]}
                        />
                    </div>
                    {!props.isLogin &&
                        <div className={styles['locked-bg']}>
                            <div className={styles['lock-btn']}>
                                <span>Unlock</span>
                            </div>
                        </div>
                    }
                    <div className="relative w-[280px]">
                        {videoIndex > 0 && <NavigatorBtn onClick={showPrevThumb} type="home" direction="prev" />}
                        {videoIndex < (props.thumbnails.length - 1) && <NavigatorBtn onClick={showNextThumb} type="home" direction="next" />}
                    </div>
                    <div className="absolute flex bottom-[8px]">
                        {props.thumbnails.map((thumb: any, index: number) => (
                            <div key={index} className={`h-[9px] w-[52px] ${videoIndex === index ? 'bg-primary-500' : 'bg-shades-200'} mx-2 rounded-[7px]`}></div>
                        ))}
                    </div>
                </div>
                <div className={styles["footer"]}>
                    <div className="flex justify-center">
                        <Chip className="mr-[9px]" type={type}>
                            {type === 'unlocked' ? 'Unlcoked' : props.currency ? <><CurrencyText currency={props.currency.toUpperCase() as ICurrency} />{` ${props.price}`}</> : 'Free'}
                        </Chip>
                        <Chip type={type} value={`${props.unlockedCnt} ${props.currency ? 'purchased' : 'unlocked'}`}>
                            <Icon icon="noofpeople" className={styles["profile-icon"]} />
                        </Chip>
                    </div>
                    <div className={styles["title"]}>
                        <span>{props.title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard