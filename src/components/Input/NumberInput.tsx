import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BaseNumberInputProps extends IBaseInputProps {
    value: number
}

function NumberInput(props: BaseNumberInputProps) {
    return <BaseInput {...props} />
}

export default NumberInput