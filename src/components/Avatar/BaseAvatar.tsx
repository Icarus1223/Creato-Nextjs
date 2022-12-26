type IBaseImgProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

export interface BaseImgProps extends IBaseImgProps {

}

export function BaseAvatar ({ className, ...props }: BaseImgProps) {
    return <img className={`avatar ${className}`} {...props} />
}