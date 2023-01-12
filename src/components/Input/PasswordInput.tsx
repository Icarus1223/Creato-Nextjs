import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BasePasswordInputProps extends IBaseInputProps {}

const PasswordInput: React.FC<BasePasswordInputProps> = ({ autoComplete, ...props }) => {
    return <BaseInput type="password" autoComplete={autoComplete} {...props} />
}

export default PasswordInput