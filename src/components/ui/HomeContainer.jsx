import React from 'react';
import {Row, Col} from 'react-bootstrap'
import ProductsGallery from "./ProductsGallery";
import DataSource from "../data/DataSource";
function HomeContainer(props) {
    const{searchQuery} = props
    return (
        <Row>
            <Col className={'col-9'}>
                <DataSource endpoint={'http://localhost:3002/products'} query={{'name': searchQuery}}>
                    <ProductsGallery {...props} />
                </DataSource>

            </Col>
        </Row>
    );
}

export default HomeContainer;