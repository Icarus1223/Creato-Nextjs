import { ClockIcon, CloseIcon, NoOfPeopleIcon } from "../../assets/svg"

interface IconProps {
    icon: string,
    className?: string
}

export default function Icon(props: IconProps) {
    const { icon } = props
    if (icon === 'close') return <CloseIcon className={props.className} />
    else if (icon === 'clock') return <ClockIcon className={props.className} />
    else if (icon === 'noofpeople') return <NoOfPeopleIcon className={props.className} />
    else return null
}