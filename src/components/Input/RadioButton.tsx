import BaseInput, { IBaseInputProps } from "./BaseInput";

const RadioButton: React.FunctionComponent<IBaseInputProps> = ({ children, ...props }) => {
    return <BaseInput type="radio" {...props}></BaseInput>
}

export default RadioButton