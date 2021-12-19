import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className="App">
      <h1>Shopping Website</h1>
      <Routes>
        {/* where we see all Products */}
        <Route path='/' element={<Products />} />
        {/* page we see all items added to the cart */}
        <Route path='/cart' element={<Cart />} />
      </Routes>


    </div>
  );
}


export default App;
