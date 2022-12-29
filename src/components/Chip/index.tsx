type IChipProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

interface ChipProps extends IChipProps {
    type: string //free unlocked locked mine
    value?: string
}

import styles from "./Chip.module.css";

export default function Chip(props: ChipProps) {
    return (
        <div className={`${styles['chip']} ${styles[`chip-${props.type}`]} ${props.className}`}>
            <span>{props.children}</span>
            <span>{props.value}</span>
        </div>
    )
}