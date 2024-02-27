import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductCard from './ProductCard';

const Products = () => {
    let products=useGetProducts();
  return (
    <div className='products'>
        <h1 style={{width:'100%'}}>Products</h1><br/>
        {
            products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })
        }
    </div>
  )
}

export default Products