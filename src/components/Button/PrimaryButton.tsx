import BaseButton, { BaseButtonProps } from "./BaseButton"

export default function PrimaryButton(props: BaseButtonProps) {
    return (
        <BaseButton
            type="button"
            className={`${props.outline === 'true' ? 'btn-primary-outline' : 'btn-primary'} ${props.rounded === 'true' ? 'btn-rounded' : 'btn-pill'}`}
            {...props}
        >
            <span>{props.value}</span>
        </BaseButton>
    )
}