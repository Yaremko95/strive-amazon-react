import React from 'react';
import {Col, Row, Image} from 'react-bootstrap'
import ProductContainer from "./ProductContainer";

function ProductsGallery(props) {
    const {data} = props
    return (
        <Col>
            <Row className={'row-cols-4'}>
                {data.map(product => <Col className={'d-flex flex-column text-center justify-content-center align-items-center'}>
                    <ProductContainer {...props} product={product}/>
                </Col>)}
            </Row>
        </Col>
    );
}

export default ProductsGallery;