import { BaseAvatar, BaseImgProps } from "./BaseAvatar";

export default function CreatorAvatar(props: BaseImgProps) {
    return <BaseAvatar className={`${props.hover === 'true' ? 'hover:outline hover:outline-2 hover:outline-primary-500 cursor-pointer' : ''}`} {...props} />
}