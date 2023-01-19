import styles from "./Chip.module.css";

type IChipProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

enum ChipTypeEnum {
    FREE = 'free',
    UNLOCKED = 'unlocked',
    LOCKED = 'locked',
    MINE = 'mine'
}

interface ChipProps extends IChipProps {
    type: keyof typeof ChipTypeEnum,
    value?: string
}

const Chip: React.FC<ChipProps> = (props) => {
    return (
        <div className={`${styles['chip']} ${styles[`${ChipTypeEnum[props.type]}`]} ${props.className}`}>
            <span>{props.children}</span>
            <span>{props.value}</span>
        </div>
    )
}

export default Chip