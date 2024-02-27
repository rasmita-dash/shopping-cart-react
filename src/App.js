import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {CartProvider} from './context/CartContext';

function App() {
  const [cartItems, setCartItems] = useState({cartItems:[]});
  return (
    <CartProvider value={{cartItems, setCartItems}}>
    <div className="App">
      <Products/>
      <ShoppingCart/>
    </div>
    </CartProvider>
  );
}

export default App;
