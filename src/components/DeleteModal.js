import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { closeDeleteModal } from '../store/actions/modalAction';


function DeleteModal() {
  const dispatch = useDispatch();
  const modalShow = useSelector(state => state.modal.modalShow)


  return (
    <Modal show={modalShow} onHide={() => dispatch(closeDeleteModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeDeleteModal())}>
          Close
        </Button>
        <Button variant="primary" onClick={() => dispatch(closeDeleteModal())}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
