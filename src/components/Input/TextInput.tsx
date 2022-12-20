import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BaseTextInputProps extends IBaseInputProps {
    value: string
}

function TextInput(props: BaseTextInputProps) {
    return <BaseInput {...props} />
}

export default TextInput