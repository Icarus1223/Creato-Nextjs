import Image, { StaticImageData } from "next/image";

export interface BaseImgProps {
    src: string | StaticImageData,
    size: string,
    hover?: string,
    className?: string,
    alt: string,
}

import styles from "./Avatar.module.css";

const BaseAvatar: React.FC<BaseImgProps> = ({ size, className, ...props }) => {
    return <Image className={`${styles['avatar']} ${styles[`avatar-${size}`]} ${className}`} {...props} />
}

export default BaseAvatar