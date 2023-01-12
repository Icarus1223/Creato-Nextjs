import styles from "./Button.module.css";

type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export interface BaseButtonProps extends IBaseButtonProps {
    outline?: string | undefined,
    rounded?: string | undefined,
    width?: string | undefined
}

const BaseButton: React.FC<BaseButtonProps> = ({ className, children, ...props }) => {
    return <button className={`${props.value ? styles['btn'] : styles['btn-icon']} ${className} ${props.width ? `w-full` : ''}`}{...props}>{children}</button>
}

export default BaseButton