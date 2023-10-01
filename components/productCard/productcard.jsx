import React from 'react';
import './style.css'
function Productcard(props) {
    const {product} = props;
    console.log(props)
    const {category,id,price,title,rating,image} = product
    return (
        <>
        <div className={"ProductCard-wrapper"}>
            <img className={"ProductCard-image  "}  src={image} alt=" Product Image"/>
            <p className={"ProductCard-category"}>{category}</p>
            <p className={"ProductCard-title"}>{title}</p>
            <p className={"ProductCard-price"}>{price}</p>
            <p className={"ProductCard-rating"}>{rating.rate}</p>
            <button className={"ProductCard-button"}>Add to the cart</button>

            
        </div>
        </>
    );
}

export default Productcard;