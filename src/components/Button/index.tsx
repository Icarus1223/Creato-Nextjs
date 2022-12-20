import { ButtonProps } from "./interface";
import PrimaryButton from "./primaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Button(props: ButtonProps) {
    const { width, disabled, color } = props
    return (
        <div style={{ width: width ? width : 'fit-content' }}>
            {disabled ?
                <div>Disabled</div>
                :
                color === 'primary' ?
                    <PrimaryButton {...props} />
                    :
                    <SecondaryButton {...props} />
            }
        </div>
    )
}