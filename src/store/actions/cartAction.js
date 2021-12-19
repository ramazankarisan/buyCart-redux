export const addToCart = (book) => {

  return {
    type: 'ADD_CART',
    payload: { ...book, count: 1 }
  }
}

export const incBookNum = (book, index) => {

  return {
    type: 'INC_NUM',
    payload: { ...book, count: book.count + 1 },
    index: index


  }
}
export const decBookNum = (book, index) => {

  return {
    type: 'DEC_NUM',
    payload: { ...book, count: ((book.count - 1) > 0) ? (book.count - 1) : (book.count = 0) },
    index: index


  }
}

export const delFromBasket = (id) => {
  return {
    type: 'DEL_ITEM',
    payload: id,

  }
}

