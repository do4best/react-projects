import React, {useEffect, useState} from 'react';
import Productcard from "../components/productCard/productcard.jsx";
import './styles.css'

function Product(props) {
    const [isLoading,setLoading] = useState(false);
    const [products,setProducts] = useState([])
    useEffect(() => {
        setLoading(true);
        async function getProducts(){
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            if(products && products.length>0){
                setProducts(products);
                setLoading(false)
            }
        }
getProducts()
    }, []);
    return (
        <>
        <div className={"Products-wrapper "}>
            {
                isLoading?<div className={"Loading "}>Fetching Data ! Please Waite</div>:products.map(
                    (product,index)=>(<Productcard product={product} key={`${index}${product.id}`}/>)
                )
            }
        </div>
        </>
    );
}

export default Product;