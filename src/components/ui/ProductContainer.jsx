import React from 'react';
import {Col, Image, Button} from "react-bootstrap";


function ProductContainer(props) {
    const {product, addToCart} = props
    return (
        <>
            <Image src={product.imageUrl} fluid />
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <Button onClick={()=>addToCart(product._id)} variant="primary">Add to cart</Button>
        </>
    );
}

export default ProductContainer;