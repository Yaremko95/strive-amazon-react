import React from 'react';
import {Row, Col} from 'react-bootstrap'
import ProductsGallery from "./ProductsGallery";
import DataSource from "../data/DataSource";
import CartGallery from "./CartGallery";
function HomeContainer(props) {
    const{searchQuery} = props
    const [trigger, setTrigger] =React.useState(false)


    return (
        <Row>
            <Col className={'col-9'}>
                <DataSource endpoint={'http://localhost:3002/products'} query={{'name': searchQuery}} trigger={trigger} setrigger={setTrigger}>
                    <ProductsGallery {...props} />
                </DataSource>
            </Col>
            <Col className={'col-3'}>
                <DataSource endpoint={'http://localhost:3002/cart'}   trigger={trigger} setrigger={setTrigger}>
                    <CartGallery   />
                </DataSource>
            </Col>
        </Row>
    );
}

export default HomeContainer;