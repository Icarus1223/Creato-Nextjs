import BaseInput, { IBaseInputProps } from "./BaseInput";

const CheckBox: React.FunctionComponent<IBaseInputProps> = ({ children, ...props }) => {
    return <BaseInput type="checkbox" {...props}></BaseInput>
}

export default CheckBox