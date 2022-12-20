import CloseIcon from "./svg"

interface IconProps {
    icon: string
}

export default function Icon(props: IconProps) {
    const { icon } = props
    if (icon === 'close') return <CloseIcon />
    else return null
}