import {
    AddIcon,
    ClockIcon,
    CloseIcon,
    EditIcon,
    MoreIcon,
    NoOfPeopleIcon,
    ProfileIcon
} from "../../src/assets/svg"

interface IconProps {
    icon: string,
    className?: string
}

const Icon: React.FC<IconProps> = (props) => {
    const { icon } = props

    switch (icon) {
        case 'close': return <CloseIcon className={props.className} />
        case 'clock': return <ClockIcon className={props.className} />
        case 'noofpeople': return <NoOfPeopleIcon className={props.className} />
        case 'add': return <AddIcon className={props.className} />
        case 'profile': return <ProfileIcon className={props.className} />
        case 'edit': return <EditIcon className={props.className} />
        case 'more': return <MoreIcon className={props.className} />
        default: return null
    }
}

export default Icon