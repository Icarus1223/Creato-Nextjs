import Image from "next/image"
import Img from "@/src/assets/img/next-bright.png"
import styles from "./NavigatorBtn.module.css"

type IImageProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>

interface ImageProps extends IImageProps {
    type: string, //home profile
    direction: string //prev next
}

const NavigatorBtn: React.FC<ImageProps> = ({ type, direction, ...props }) => {
    return (
        <Image
            className={`${styles[`navigator-${type}-btn`]} ${styles[`navigator-${direction}`]}`}
            src={Img}
            alt="NavigatorImg"
            onClick={props.onClick}
        />
    )
}

export default NavigatorBtn