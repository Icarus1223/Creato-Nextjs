import { ButtonProps } from "./interface";

export default function TextButton(props: ButtonProps) {
    const { text, styles } = props

    return (
        <button className={`${styles}`}>
            {text}
        </button>
    )
}