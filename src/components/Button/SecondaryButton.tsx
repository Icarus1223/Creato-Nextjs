import BaseButton, { BaseButtonProps } from "./BaseButton"

export default function PrimaryButton(props: BaseButtonProps) {
    return (
        <BaseButton
            type="button"
            className={`${props.outline === 'true' ? 'btn-secondary-outline' : 'btn-secondary'} ${props.rounded === 'true' ? 'btn-rounded' : 'btn-pill'}`}
            {...props}
        >
            <span>{props.value}</span>
        </BaseButton>
    )
}