import { Dispatch, SetStateAction, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import Icon from "../../Icon";
import styles from "./BaseModal.module.css";

type IModalProps = React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface IBaseModalProps extends IModalProps {
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    className?: string,
    title: string,
    closeIcon?: any,
}

const BaseModal: React.FC<IBaseModalProps> = (props) => {
    const { isOpen, setOpen, className, title, closeIcon, children } = props
    const closeModal = () => { setOpen(false) }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={`${className} ${styles["modal"]}`}>
                                <Dialog.Title className={`${styles["modal-header"]} ${typeof closeIcon !== 'undefined' ? 'justify-between' : 'justify-center'}`}>
                                    <span>{title}</span>
                                    {typeof closeIcon !== 'undefined' && <span onClick={closeModal}><Icon icon="close" className="cursor-pointer dark:fill-shades-0" /></span>}
                                </Dialog.Title>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BaseModal