import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BasePasswordInputProps extends IBaseInputProps {}

const CheckBox: React.FunctionComponent<BasePasswordInputProps> = ({ children, ...props }) => {
    return <BaseInput type="checkbox" {...props}></BaseInput>
}

export default CheckBox