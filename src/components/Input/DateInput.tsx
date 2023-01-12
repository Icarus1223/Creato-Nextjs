import BaseInput, { IBaseInputProps } from "./BaseInput";

interface BaseDateInputProps extends IBaseInputProps {}

const DateInput: React.FC<BaseDateInputProps> = ({ ...props }) => {
    return <BaseInput type="date" {...props} />
}

export default DateInput