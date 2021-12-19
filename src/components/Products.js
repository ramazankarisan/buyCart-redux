import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartAction';
import { OverlayTrigger, Popover } from 'react-bootstrap';


function Products() {
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.cart.bookList);

  const popoverAddition = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">This item added to the cart! </Popover.Header>
    </Popover>)

  return (
    <div>
      <h2>
        <span>Book List</span><Link to="/cart">My Cart</Link>
      </h2>
      {bookList.map(book =>
        <div className="book" key={book.id}>
          <img
            src={book.image}
            alt={book.name}
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#36; {book.price}</p>

            <OverlayTrigger trigger="focus" placement="right" overlay={popoverAddition}>
              <button onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
            </OverlayTrigger>


          </div>
        </div>)}
    </div>
  )
}



export default Products;
