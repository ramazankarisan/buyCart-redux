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
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {bookList.map(book => <div className="book">
        <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Yazar: {book.author}</p>
          <p>Fiyat: &#8378; {book.price}</p>
          <button onClick={() => dispatch(addToCart(book))}>Sepete Ekle</button>
        </div>
      </div>)}
    </div>
  )
}



export default Products;
