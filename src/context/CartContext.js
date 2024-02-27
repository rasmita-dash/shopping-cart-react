import { createContext, useState, useContext } from "react";

// Create a context to hold the array
const CartContext = createContext();

// Custom hook to access the array from the context
export function useCartContext() {
  return useContext(CartContext);
}

// Component that provides the array through context
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

    const addItemInCart = (newItem) => {
        let itemIndex = cartItems.findIndex(item=>item.id ===newItem.id);
        if(itemIndex>=0){
            cartItems[itemIndex].quantity =(cartItems[itemIndex].quantity || 0) +1;
            setCartItems([...cartItems]);
        }else{
            setCartItems([...cartItems,{...newItem, quantity:1}])
        }
    }

  const removeItemFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemInCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}