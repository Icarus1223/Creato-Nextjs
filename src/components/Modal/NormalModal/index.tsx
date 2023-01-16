import BaseModal, { IBaseModalProps } from "../BaseModal"

type IButton = {
    id: number,
    element: React.ReactElement
}

interface INormalModalProps extends IBaseModalProps {
    buttons: Array<IButton>,
    bodyText?: string
}

const NormalModal: React.FC<INormalModalProps> = ({ buttons, bodyText, ...props }) => {

    return (
        <BaseModal {...props}>
            <span className="text-sm font-normal text-shades-100 dark:text-shades-0 text-center p-3">{bodyText}</span>
            <div className={`flex ${buttons.length === 2 ? 'justify-between' : 'justify-center'} mt-4`}>
                {buttons.map((button) => (
                    <div key={button.id}>{button.element}</div>
                ))}
            </div>
        </BaseModal>
    )
}

export default NormalModal