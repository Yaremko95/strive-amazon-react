import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import {MdKeyboardArrowUp} from "react-icons/md";


function CartGallery(props) {

    const {data, removeFromCart, addToCart} = props
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
                                <span>{product.productId.price}</span>
                                <span>{product.quantity}</span>
                            </Col>
                            <Col>
                                <MdKeyboardArrowUp onClick={(id)=>addToCart(product.productId._id)} />
                            </Col>
                        </Row>
                    </>
                </div>)}
        </>
    );

}

export default CartGallery;