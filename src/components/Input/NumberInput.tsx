import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BaseNumberInputProps extends IBaseInputProps {
    value?: number
}

function NumberInput(props: BaseNumberInputProps) {
    return <BaseInput type="number" {...props} />
}

export default NumberInput