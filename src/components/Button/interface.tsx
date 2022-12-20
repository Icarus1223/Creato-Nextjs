export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    disabled?: boolean,
    color?: string,
    outline?: boolean,
    rounded?: boolean,
    text?: string,
    styles?: string,
    icon?: string,
    width?: string,
    onClick?: React.MouseEventHandler,
    type?: 'button' | 'submit' | 'reset' | undefined,
}
