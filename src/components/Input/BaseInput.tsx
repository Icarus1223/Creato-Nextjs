export type IBaseInputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const BaseInput: React.FC<IBaseInputProps> = ({ className, children, ...props }) => {
    return <input className="" {...props} />
}

export default BaseInput