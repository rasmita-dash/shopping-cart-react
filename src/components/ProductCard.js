import React, { useContext, useState } from 'react'
import { useCartContext } from '../context/CartContext';

const ProductCard = (props) => {
    const [product, setProduct] = useState(props.product);
    const {cartItems,addItemInCart, RemoveItemFromCart}= useCartContext();
    const addToCart=()=>{
        addItemInCart(props.product);        
    }
    const RemoveFromCart=()=>{
        let index = cartItems.findIndex(x=>x.Id === props.product.Id)
        RemoveItemFromCart(index);        
    }
  return (
    <div className='product-card'>
        <p className='prod-name'>{product.title}</p>
        <p><label>Price:</label>{product.price}</p>
        <button className='add-to-cart-btn' onClick={addToCart}>Add</button>
    </div>
  )
}

export const ProdInCart = (ProductCard) =>{   

    const {cartItems,addItemInCart, RemoveItemFromCart}= useCartContext();
    
    return (props)=>{
        const addToCart=()=>{
            addItemInCart({...props.product, quantity:1});        
        }
        const RemoveFromCart=()=>{
            let index = cartItems.findIndex(x=>x.Id === props.product.Id)
            RemoveItemFromCart(index);        
        }
        return (
        <>
            <div className='cart-btns'>
                <button onClick={addToCart}>+</button>
                <label className='quantity'>{props.product.quantity}</label>
                <button >-</button>
            </div>
            <ProductCard {...props} />
        </>
            )
    }
}
export default ProductCard;