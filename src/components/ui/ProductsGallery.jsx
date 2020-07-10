import React from 'react';
import {Col, Row, Image} from 'react-bootstrap'

function ProductsGallery(props) {
    const {data} = props
    return (
        <Col>
            <Row className={'row-cols-4'}>
                {data.map(product => <Col className={'d-flex flex-column text-center justify-content-center align-items-center'}>
                    <Image src={product.imageUrl} fluid />
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                    <span>{product.price}</span>
                </Col>)}
            </Row>
        </Col>
    );
}

export default ProductsGallery;