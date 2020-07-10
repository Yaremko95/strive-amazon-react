import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";


function CartGallery(props) {

    const {data, removeFromCart} = props
    console.log(data)
    return (
       <>
                {data.map(product => <div  className={'d-flex flex-column text-center justify-content-center align-items-center'}>
                    <>
                        <button type="button" className="close align-self-end" aria-label="Close" onClick={(id)=>removeFromCart(product.productId._id)} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <Image src={product.productId.imageUrl} fluid />
                        <span>{product.productId.name}</span>
                        <span>{product.productId.description}</span>
                        <span>{product.productId.price}</span>
                        <span>{product.quantity}</span>
                    </>
                </div>)}
        </>
    );

}

export default CartGallery;