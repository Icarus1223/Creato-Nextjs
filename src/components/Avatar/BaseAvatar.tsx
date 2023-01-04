type IBaseImgProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

export interface BaseImgProps extends IBaseImgProps {
    size: string,
    hover?: string,
}
import styles from "./Avatar.module.css";

export function BaseAvatar({ className, size, ...props }: BaseImgProps) {
    return <img className={`${styles['avatar']} ${styles[`avatar-${size}`]} ${className}`} {...props} />
}