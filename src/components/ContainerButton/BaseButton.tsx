export type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;
import styles from "./ContainerButton.module.css";

export default function BaseButton({ className, children, ...props }: IBaseButtonProps) {
    return <button className={`${props.value ? styles['containerBtn'] : styles['btn-icon']} ${className} w-[330px]`} {...props}>{children}</button>
}