import React from 'react'
import { Modal } from 'react-bootstrap'

export interface IModalInfo {
    modalTitle: string;
    show: boolean;
    handleClose: () => void;
    children: JSX.Element | JSX.Element[];
    size: string;

}

const ModalData: React.FC<IModalInfo> = ({ modalTitle, show, handleClose, children }) => {
    return (
        <Modal size={'lg'} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}

export default ModalData