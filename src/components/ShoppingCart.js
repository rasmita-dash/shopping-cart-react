import React, { useContext, useEffect, useState } from 'react';
import ProductCard, {ProdInCart} from './ProductCard';
import { useCartContext } from '../context/CartContext';

const ShoppingCart = () => {
    const {cartItems, addItemInCart, removeItemFromCart}= useCartContext();
    const [cartQuantity, setCartQuantity] = useState(0);
    useEffect(()=>{
        let quantity=(cartItems?.length>0?cartItems.reduce((qty, item)=> qty +item.quantity, 0) : 0);
        console.log("Quantity: " +quantity);
        setCartQuantity(quantity);
    },[cartItems]);
    const ProdInCartWithBtns = ProdInCart(ProductCard) 
    console.log(cartItems);
  return (
    <div className='shopping-cart'>
        <h4> Cart Items {cartQuantity}</h4>
        
        {cartItems?.map((product, index) => (
            <ProdInCartWithBtns key={index} product={product}/>
        ))}
    </div>
  )
}

export default ShoppingCart