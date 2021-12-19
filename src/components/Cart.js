
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decBookNum, delFromBasket, incBookNum } from '../store/actions/cartAction'
import { showDeleteModal } from '../store/actions/modalAction'
import DeleteModal from './DeleteModal'

function Cart() {
  const dispatch = useDispatch();
  const cartBooks = useSelector(state => state.cart.cart)
  const totalPrice = cartBooks.reduce((total, item) => (total += item.price * item.count), 0).toFixed(2);


  return (
    <div>
      <h2>
        <Link to="/">Book List</Link><span>My Cart</span>
      </h2>

      <h3>Total Amount: &#36; {totalPrice}</h3>


      {cartBooks.map((book, index) => {
        return <>
          <div className="book" key={book.id}>
            <DeleteModal id={index} />
            <img
              src={book.image}
              alt={book.name}
            />
            <div>
              <h4>{book.name}</h4>
              <p>Athor: {book.author}</p>
              <p>Price: &#36; {book.price}</p>
              <p>Total: &#36;{(book.count * book.price).toFixed(2)}</p>
              <p>You have {book.count} item in your basket.</p>
              <button style={{ marginRight: 5 }} onClick={() => dispatch(decBookNum(book, index))} >-</button>
              <button onClick={() => dispatch(showDeleteModal(index))}>Delete from Basket</button>
              <button
                style={{ marginLeft: 5 }}
                onClick={() => dispatch(incBookNum(book, index))}
              >+</button>
            </div>
          </div>
        </>
      })}


    </div >
  )
}

export default Cart
