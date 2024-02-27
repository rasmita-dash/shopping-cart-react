import { useEffect, useState } from "react";

const useGetProducts=()=>{
    const [products, setProducts]= useState([]);
    const getProducts = async()=>{
        let data = await fetch("https://dummyjson.com/products");
        data= await data.json();
        setProducts(data.products);
    }
    useEffect(()=>{getProducts()},[]);
    return products;
}
export default useGetProducts;
