import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BaseTextInputProps extends IBaseInputProps {
    value?: string
}

const TextInput: React.FunctionComponent<BaseTextInputProps> = ({ required, ...props }) => {
    return <BaseInput type="text" required {...props} />
}

export default TextInput