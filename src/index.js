import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartReducer from './store/reducers/cartReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(cartReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

