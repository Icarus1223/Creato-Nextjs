import styles from "./ContainerButton.module.css";

export type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

const BaseButton: React.FC<IBaseButtonProps> = ({ className, children, ...props }) => {
    return <button className={`${props.value ? styles['containerBtn'] : styles['btn-icon']} ${className} w-[330px]`} {...props}>{children}</button>
}

export default BaseButton