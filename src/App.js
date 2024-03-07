import { Route, Routes } from 'react-router-dom';
// import './App.css';
import AppNavBar from './components/navbar';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
