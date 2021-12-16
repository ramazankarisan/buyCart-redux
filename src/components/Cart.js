import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { incBookNum } from '../store/actions/cartAction'

function Cart() {
  const dispatch = useDispatch();
  const cartBooks = useSelector(state => state.cart)
  // const [count, setCount] = useState(1)
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
            <img
              src={book.image}
              alt={book.name}
            />
            <div>
              <h4>{book.name}</h4>
              <p>Athor: {book.author}</p>
              <p>Price: &#36; {book.price}</p>
              <p>Total: &#36;{book.count * book.price}</p>
              <p>You have {book.count} item in your basket.</p>
              <button  >-</button>
              <button>Delete from Basket</button>
              <button
                // onClick={() => setCount(count + 1)}
                onClick={() => dispatch(incBookNum(book, index))}
              >+</button>
            </div>
          </div>
        </>
      })}


    </div>
  )
}

export default Cart
