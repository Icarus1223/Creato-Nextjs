type IChipProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

interface ChipProps extends IChipProps {
    type: string //free unlocked locked mine
} 

export default function Chip(props: ChipProps) {
    return (
        <div className={`chip chip-${props.type}`}>
            <span>{props.children}</span>
        </div>
    )
}