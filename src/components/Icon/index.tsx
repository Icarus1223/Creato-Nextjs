import { 
    AddIcon, 
    ClockIcon, 
    CloseIcon, 
    EditIcon, 
    MoreIcon, 
    NoOfPeopleIcon, 
    ProfileIcon 
} from "../../assets/svg"

interface IconProps {
    icon: string,
    className?: string
}

export default function Icon(props: IconProps) {
    const { icon } = props
    if (icon === 'close') return <CloseIcon className={props.className} />
    else if (icon === 'clock') return <ClockIcon className={props.className} />
    else if (icon === 'noofpeople') return <NoOfPeopleIcon className={props.className} />
    else if (icon === 'add') return <AddIcon className={props.className} />
    else if (icon === 'profile') return <ProfileIcon className={props.className} />
    else if (icon === 'edit') return <EditIcon className={props.className} />
    else if (icon === 'more') return <MoreIcon className={props.className} />
    else return null
}