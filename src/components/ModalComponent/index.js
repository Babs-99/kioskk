import React from 'react'
import { Modal } from 'react-bootstrap'

function ModalComponent(props) {

  return (
    <React.Fragment>
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-900w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-white"
    >
      <Modal.Header className="text-white" closeButton>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <div>
            <img className="px-2 py-2 " src="./asset/img/QRcode.svg" alt="" />
          </div>
        </div>
      </Modal.Body>
      
      <div className="modalText justify-content-center">
        <p>Please place your QR code on the scanner</p>
        <div className="arrow bounce d-flex justify-content-center">
          <img src="./asset/img/arrow.svg" alt="" />
        </div>
      </div>
      </Modal>
    </React.Fragment>
  );
}

export default ModalComponent;