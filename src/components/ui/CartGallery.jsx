import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";


function CartGallery(props) {

    const {data, removeFromCart, addToCart, decrementQuantity} = props
    console.log(data)

    return (
       <>
                {data.map(product => <div  className={'d-flex flex-column  justify-content-between align-items-center'}>
                    <>
                        <button type="button" className="close align-self-end" aria-label="Close" onClick={(id)=>removeFromCart(product.productId._id)} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <Row className={'d-flex  text-center justify-content-between align-items-center'}>
                            <Col className={'d-flex flex-column text-center justify-content-between align-items-center'} >
                                <Image src={product.productId.imageUrl} fluid />
                                <span>{product.productId.name}</span>
                                <span>{product.productId.description}</span>
                                <span>Price: {product.productId.price*product.quantity}</span>
                                <span>{product.quantity}</span>
                            </Col>
                            <Col className={'d-flex flex-column text-center justify-content-between align-items-center'}>
                                <MdKeyboardArrowUp onClick={(id)=>addToCart(product.productId._id)} />
                                <MdKeyboardArrowDown onClick={(id)=>decrementQuantity(product.productId._id)} />
                            </Col>
                        </Row>
                    </>
                </div>)}
        </>
    );

}

export default CartGallery;