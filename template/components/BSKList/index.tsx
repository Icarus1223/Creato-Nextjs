import { BSKCard } from "@/src/components/BSKCard"
import { BSKProfileProps } from "@/src/components/BSKCard/ProfileCard"
import styles from "./BSKList.module.css"

interface BSKListProps {
    BSKs: Array<BSKProfileProps>
}

const BSKList: React.FC<BSKListProps> = ({ BSKs }) => {
    return (
        <div className={styles["BSK-list"]}>
            {BSKs.map((BSK: BSKProfileProps, index: number) => (
                <div key={index} className={styles["BSK-container"]}>
                    <div className={styles["BSK-item"]}>
                        <BSKCard.ProfileCard
                            thumbnails={BSK.thumbnails}
                            isLogin={BSK.isLogin}
                            locked={BSK.locked}
                            time={BSK.time}
                            title={BSK.title}
                            currency={BSK.currency}
                            price={BSK.price}
                            unlockedCnt={BSK.unlockedCnt}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BSKList