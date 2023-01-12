import { useState, useMemo } from "react"
import Image, { StaticImageData } from "next/image"
import Chip from "@/template/Chip"
import Icon from "@/template/Icon"
import CurrencyText from "@/src/components/CurrencyText"
import PostTime from "@/src/components/PostTime"
import NavigatorBtn from "@/src/components/BSKCard/NavigatorBtn"
import { CURRENCIES } from "src/constants"
import styles from "./BSKCard.module.css"

type ICurrency = keyof typeof CURRENCIES

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

const ProfileCard: React.FC<BSKProfileProps> = (props) => {
    const type = props.isMine ? 'mine' : props.locked ? props.currency ? 'locked' : 'free' : 'unlocked'
    const [videoIndex, setVideoIndex] = useState(0)

    const showPrevThumb = () => { setVideoIndex((prevIndex: number) => (prevIndex - 1) % props.thumbnails.length) }
    const showNextThumb = () => { setVideoIndex((prevIndex: number) => (prevIndex + 1) % props.thumbnails.length) }

    return (
        <div className={styles['bskcard-profile']}>
            <div className={`${styles[`header`]} ${styles[`header-${type}`]}`}>
                <Chip type={type}>
                    {type === "mine" ? 'My Bite' : type === 'unlocked' ? 'Unlcoked' : props.currency ? <><CurrencyText currency={props.currency.toUpperCase() as ICurrency} />{` ${props.price}`}</> : 'Free'}</Chip>
                <Chip type={type} value={`${props.unlockedCnt} ${props.currency ? 'purchased' : 'unlocked'}`}><Icon icon="noofpeople" className="fill-shades-0 mr-[3px]" /></Chip>
            </div>
            <div className={`${styles[`body`]} ${styles[`body-${type}`]}`}>
                <Image
                    alt="BSKProfileImage"
                    className="w-full"
                    src={props.thumbnails[videoIndex]}
                />
                {!props.isLogin &&
                    <div className={styles['locked-bg']}>
                        <div className={styles['lock-btn']}>
                            <span>Unlock</span>
                        </div>
                    </div>
                }
                <div className="absolute w-[280px] h-[495px]">
                    {videoIndex > 0 && <NavigatorBtn onClick={showPrevThumb} type="profile" direction="prev" />}
                    {videoIndex < (props.thumbnails.length - 1) && <NavigatorBtn onClick={showNextThumb} type="profile" direction="next" />}
                </div>
                <div className="absolute flex bottom-[8px]">
                    {props.thumbnails.map((thumb: any, index: number) => (
                        <div key={index} className={`h-[9px] w-[52px] ${videoIndex === index ? 'bg-primary-500' : 'bg-shades-200'} mx-2 rounded-[7px]`}></div>
                    ))}
                </div>
            </div>
            <div className={styles["footer"]}>
                <div className={styles["post-time"]}>
                    <Icon icon="clock" className="mr-[5px] fill-error-500" />
                    <span><PostTime time={props.time} /></span>
                </div>
                <div className={styles["title"]}>
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard