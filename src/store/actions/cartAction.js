export const addToCart = (book) => {

  return {
    type: 'ADD_CART',
    payload: book
  }
}