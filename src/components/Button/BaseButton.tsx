type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export interface BaseButtonProps extends IBaseButtonProps {
    outline?: string | undefined,
    rounded?: string | undefined
}

function BaseButton({ className, children, ...props }: BaseButtonProps) {
    return <button className={`${props.value ? 'btn' : 'btn-icon'} ${className}`}{...props}>{children}</button>
}

export default BaseButton