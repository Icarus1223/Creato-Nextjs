import BaseButton, { BaseButtonProps } from "./BaseButton"

export default function PrimaryButton(props: BaseButtonProps) {
    return (
        <BaseButton
            type="button"
            className={`inline-flex items-center justify-center ${props.outline === 'true' ? 'btn-primary-outline' : 'btn-primary'} ${props.rounded === 'true' ? 'btn-rounded' : 'btn-pill'}`}
            {...props}
        >
            <span className={props.children ? `w-[20px] h-[20px] ${props.value ? 'mr-2' : ''} flex items-center justify-center` : ''}>{props.children}</span>
            <span>{props.value}</span>
        </BaseButton>
    )
}