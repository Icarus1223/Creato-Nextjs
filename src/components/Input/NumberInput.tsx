import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BaseNumberInputProps extends IBaseInputProps {
    value?: number
}

const NumberInput: React.FunctionComponent<BaseNumberInputProps> = ({ step, min, max, ...props }) => {
    return <BaseInput type="number" max={max} min={min} step={step} {...props} />
}

export default NumberInput