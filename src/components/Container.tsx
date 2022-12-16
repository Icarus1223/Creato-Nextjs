import { MouseEventHandler, useState } from "react"
import Icon from "./Icon"

interface ButtonProps {
    color?: string,
    text?: string,
    outlined?: boolean,
    disabled?: boolean,
    width?: string,
    icon?: string,
    handleClick?: MouseEventHandler
}

export default function Container(props: ButtonProps) {
    const { color, text, outlined, disabled, icon, width, handleClick } = props
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
        disable: 'bg-neutral-100 cursor-not-allowed text-neutral-500',
    }

    return (
        <button
            style={{ width: width ? width : '330px' }}
            className={`
                ${icon ? 'py-[1px]' : 'py-[11.5px]'}
                transition duration-300
                flex items-center justify-center
                rounded-[10px]
                ${disabled && buttonConfig.disable}
                ${color && (outlined ? buttonConfig[color].outline : buttonConfig[color].fill)}
            `}
            onClick={handleClick}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {icon &&
                <div className={text ? 'w-[40px] h-[40px] flex justify-center items-center' : ''}>
                    <Icon
                        icon={icon}
                        color={`
                            transition duration-300
                            ${disabled ? 'fill-neutral-500' :
                                color ? (outlined && hover) || !outlined ?
                                    'fill-white' : `${buttonConfig[color].iconColor}` : ''}
                        `}
                    />
                </div>
            }
            <span className="text-[16px] leading-5 font-normal tracking-wider">{text}</span>
        </button>
    )
}