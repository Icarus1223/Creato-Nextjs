import BaseButton, { IBaseButtonProps } from "./BaseButton"

export default function PrimaryButton(props: IBaseButtonProps) {
    return (
        <BaseButton
            type="button"
            className={`inline-flex items-center justify-center containerBtn-secondary`}
            {...props}
        >
            <span className={props.children ? `w-[20px] h-[20px] ${props.value ? 'mr-2' : ''} flex items-center justify-center` : ''}>{props.children}</span>
            <span>{props.value}</span>
        </BaseButton>
    )
}