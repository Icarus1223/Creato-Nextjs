type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export interface BaseButtonProps extends IBaseButtonProps {
    outline?: string | undefined,
    rounded?: string | undefined
}

function BaseButton({ className, children, ...props }: BaseButtonProps) {
    return <button className={`btn ${className}`}{...props}>{children}</button>
}

export default BaseButton