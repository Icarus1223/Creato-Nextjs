import BaseButton, { BaseButtonProps } from "./BaseButton"
import styles from "./Button.module.css";

export default function PrimaryButton(props: BaseButtonProps) {
    return (
        <BaseButton
            type="button"
            style={props.width ? { width: props.width } : {}}
            className={`inline-flex items-center justify-center ${props.outline === 'true' ? styles['btn-secondary-outline'] : styles['btn-secondary']} ${props.rounded === 'true' ? styles['btn-rounded'] : styles['btn-pill']}`}
            {...props}
        >
            <span className={props.children ? `w-[20px] h-[20px] ${props.value ? 'mr-2' : ''} flex items-center justify-center` : ''}>{props.children}</span>
            <span>{props.value}</span>
        </BaseButton>
    )
}