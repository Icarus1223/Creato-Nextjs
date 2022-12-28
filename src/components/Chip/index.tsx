type IChipProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

interface ChipProps extends IChipProps {
    type: string //free unlocked locked mine
    value?: string
} 

export default function Chip(props: ChipProps) {
    return (
        <div className={`chip chip-${props.type} ${props.className}`}>
            <span>{props.children}</span>
            <span>{props.value}</span>
        </div>
    )
}