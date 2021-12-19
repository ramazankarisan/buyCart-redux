import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { delFromBasket } from '../store/actions/cartAction';
import { closeDeleteModal } from '../store/actions/modalAction';


function DeleteModal({ id }) {
  const dispatch = useDispatch();
  const modalShow = useSelector(state => state.modal.modalShow)
  const index = useSelector(state => state.modal.index)


  return (
    <Modal show={modalShow} onHide={() => dispatch(closeDeleteModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>You are just deleting this item from your cart, are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => {
          dispatch(delFromBasket(index));
          dispatch(closeDeleteModal())
        }}>
          Yes
        </Button>
        <Button variant="primary" onClick={() => dispatch(closeDeleteModal())}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
