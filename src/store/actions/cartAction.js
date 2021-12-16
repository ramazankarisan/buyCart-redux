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