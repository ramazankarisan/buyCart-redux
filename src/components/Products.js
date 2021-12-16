import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/actions/cartAction';


function Products() {
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.bookList);

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
            <button onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
          </div>
        </div>)}
    </div>
  )
}



export default Products;
