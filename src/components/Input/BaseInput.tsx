export type IBaseInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

function BaseInput({ className, children, ...props }: IBaseInputProps) {
    return <input className="" {...props}/>
}

export default BaseInput