import BaseButton, { IBaseButtonProps } from "./BaseButton"
import styles from "./ContainerButton.module.css";

const PrimaryButton: React.FC<IBaseButtonProps> = (props) => {
    return (
        <BaseButton
            type="button"
            className={`inline-flex items-center justify-center ${styles[`containerBtn-primary`]}`}
            {...props}
        >
            <span className={props.children ? `w-[20px] h-[20px] ${props.value ? 'mr-2' : ''} flex items-center justify-center` : ''}>{props.children}</span>
            <span>{props.value}</span>
        </BaseButton>
    )
}

export default PrimaryButton