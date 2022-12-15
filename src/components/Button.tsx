import { MouseEventHandler, useState } from "react"
import CloseIcon from "./svgs"

interface ButtonProps {
    color?: string,
    text?: string,
    rounded: string,
    outline?: boolean,
    disable?: boolean,
    icon?: string,
    handleClick?: MouseEventHandler
}

const Icon = (props: any) => {
    const { icon, color } = props

    return (
        <>
            {icon === 'close' && <CloseIcon color={color} />}
        </>
    )
}

export default function Button(props: ButtonProps) {
    const { color, text, rounded, outline, disable, icon, handleClick } = props
    const [hover, setHover] = useState(false)

    const buttonConfig: any = {
        primary: {
            iconColor: 'fill-primary-500',
            fill: 'bg-primary-500 text-white hover:bg-primary-300 active:bg-primary-500',
            outline: 'outline outline-1 text-primary-500 bg-white hover:outline-0 hover:bg-primary-300 hover:text-white active:bg-primary-500 active:text-white'
        },
        secondary: {
            iconColor: 'fill-secondary-500',
            fill: 'bg-secondary-500 text-white hover:bg-secondary-300 active:bg-secondary-500',
            outline: 'outline outline-1 text-secondary-500 bg-white hover:outline-0 hover:bg-secondary-300 hover:text-white active:bg-secondary-500 active:text-white'
        },
        rounded: 'rounded-[8px]',
        pill: 'rounded-full',
        disable: 'bg-neutral-100 cursor-not-allowed text-neutral-500',
    }

    return (
        <button
            className={`
                ${text ? 'p-[16px]' : 'p-[8px] w-[40px] h-[40px]'}
                transition duration-300
                flex items-center justify-center
                ${buttonConfig[rounded]}
                ${disable && buttonConfig.disable}
                ${color && (outline ? buttonConfig[color].outline : buttonConfig[color].fill)}
            `}
            onClick={handleClick}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {icon &&
                <div className={text ? 'w-[20px] h-[20px] flex justify-center items-center mr-[8px]' : ''}>
                    <Icon
                        icon={icon}
                        color={`
                            transition duration-300
                            ${disable ? 'fill-neutral-500' :
                                color ? (outline && hover) || !outline ?
                                    'fill-white' : `${buttonConfig[color].iconColor}` : ''}
                        `}
                    />
                </div>
            }
            <span className="">{text}</span>
        </button>
    )
}