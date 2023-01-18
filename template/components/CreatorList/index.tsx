import { Creator } from "@/src/components/Creator";
import { CreatorProps } from "@/src/components/Creator/UserCreator";
import styles from "./CreatorList.module.css";

interface CreatorListProps {
    creators: Array<CreatorProps>
}

const CreatorList: React.FC<CreatorListProps> = ({ creators }) => {
    return (
        <div className={styles["creator-list"]}>
            {creators.map((creator: CreatorProps, index: number) => (
                <div key={index} className={styles["creator-container"]}>
                    <Creator.UserCreator
                        avatar={creator.avatar}
                        categories={creator.categories}
                        name={creator.name}
                        profileUrl={creator.profileUrl}
                    />
                </div>
            ))}
        </div>
    )
}

export default CreatorList