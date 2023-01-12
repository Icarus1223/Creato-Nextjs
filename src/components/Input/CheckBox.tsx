import BaseInput, { IBaseInputProps } from "./BaseInput";

const CheckBox: React.FC<IBaseInputProps> = ({ children, ...props }) => {
    return <BaseInput type="checkbox" {...props}></BaseInput>
}

export default CheckBox