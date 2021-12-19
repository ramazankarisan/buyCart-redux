import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartAction'

function PopoverAdd({ book }) {
  const dispatch = useDispatch();
  const message = useSelector(state => state.cart.message)

  const popoverAddition = (
    <Popover id="popover-basic">
      <Popover.Header as="h3"> This item added to the cart! </Popover.Header>
    </Popover>)

  const popoverAlreadyAdded = (
    <Popover id="popover-basic">
      <Popover.Header as="h3"> 'this item is already added to the cart' </Popover.Header>
    </Popover>)
  return (
    <OverlayTrigger trigger="focus" placement="right" overlay={message ? popoverAlreadyAdded : popoverAddition}>
      <button onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
    </OverlayTrigger>
  )
}

export default PopoverAdd
