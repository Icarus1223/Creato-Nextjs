import { ChipType } from "src/constants";
import styles from "./Chip.module.css";

type IChipProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

interface ChipProps extends IChipProps {
    type: keyof typeof ChipType,
    value?: string
}

const Chip: React.FC<ChipProps> = (props) => {
    return (
        <div className={`${styles['chip']} ${styles[`${ChipType[props.type]}`]} ${props.className}`}>
            <span>{props.children}</span>
            <span>{props.value}</span>
        </div>
    )
}

export default Chip