export const showDeleteModal = (index) => {
  return {
    type: 'SHOW_MODAL',
    payload: index


  }
}

export const closeDeleteModal = () => {
  return {
    type: 'CLOSE_MODAL',


  }
}