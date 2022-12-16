import CloseIcon from "./svgs"

interface IconProps {
    icon: string,
    color: string
}

export default function Icon(props: IconProps) {
    const { icon, color } = props
    if(icon === 'close') return <CloseIcon color={color} />
    else return null
}