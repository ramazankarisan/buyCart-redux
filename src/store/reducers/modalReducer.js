
const initialState = {
  modalShow: false
}
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SHOW_MODAL':

      return { modalShow: true, index: action.payload };

    case 'CLOSE_MODAL':

      return initialState

    default:
      return state;
  }

}