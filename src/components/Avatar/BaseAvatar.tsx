type IBaseImgProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

export interface BaseImgProps extends IBaseImgProps {
    size: string
}

export function BaseAvatar ({ className, size, ...props }: BaseImgProps) {
    return <img className={`avatar avatar-${size} ${className}`} {...props} />
}