import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';


function App() {

  return (
    <div className="App">
      <h1>Shopping Website</h1>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>


    </div>
  );
}


export default App;
